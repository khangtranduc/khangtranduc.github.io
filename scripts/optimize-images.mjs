// Optimise raster images under static/media and static/thumbs into WebP.
//
// Runs automatically before `dev` and `build` (see package.json predev/prebuild),
// so any .png/.jpg/.jpeg you drop into those folders is converted to a much
// smaller .webp on the next dev start or build. The original is removed once the
// .webp is written, so the repo/deploy carries only the optimised file.
//
// References don't need updating: the ![[...]] preprocessor (svelte.config.js)
// and the project card loader rewrite any .png/.jpg reference to .webp at render
// time — so `![[fox.png]]` / `image: /thumbs/fox.png` keep working.
//
// Scope is deliberately limited to the two content-image folders; functional
// assets like static/favicon.png are never touched.

import { readdir, stat, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

// sharp's ESM build uses `import ... with { type: 'json' }`, which needs
// Node ≥20.10; load its CommonJS build so this also runs on older Node 20.x.
const require = createRequire(import.meta.url);
const sharp = require('sharp');

const DIRS = ['static/media', 'static/thumbs'];
const RASTER = /\.(png|jpe?g)$/i;
const MAX_EDGE = 1600; // px on the longest side — plenty for full-width retina
const QUALITY = 80;

let converted = 0;
let savedBytes = 0;

async function walk(dir) {
	let entries;
	try {
		entries = await readdir(dir, { withFileTypes: true });
	} catch {
		return; // folder may not exist yet
	}

	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full);
			continue;
		}
		if (!RASTER.test(entry.name)) continue;

		const out = full.replace(RASTER, '.webp');
		const srcStat = await stat(full);

		// Up-to-date .webp already exists → nothing to do but drop the stray original.
		if (existsSync(out) && (await stat(out)).mtimeMs >= srcStat.mtimeMs) {
			await unlink(full);
			continue;
		}

		try {
			const info = await sharp(full)
				.resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
				.webp({ quality: QUALITY })
				.toFile(out);

			converted++;
			savedBytes += srcStat.size - info.size;
			console.log(
				`  ${full}  ${Math.round(srcStat.size / 1024)}KB → ${path.basename(out)} ${Math.round(info.size / 1024)}KB`
			);
			await unlink(full); // replace the original
		} catch (err) {
			console.warn(`  ! skipped ${full}: ${err.message}`);
		}
	}
}

for (const dir of DIRS) await walk(dir);

console.log(
	converted
		? `[images] ${converted} optimised, ~${(savedBytes / 1024 / 1024).toFixed(1)}MB saved`
		: '[images] nothing to optimise'
);
