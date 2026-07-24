import type { Post, Project } from '$lib/types';

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export const formatDate = (date: string, dateStyle: DateStyle = 'medium', locales = 'en') => {
	// Safari is mad about dashes in the date;
	const dateToFormat = new Date(date.split('T')[0].replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
};

export const capitalize = (str: string | undefined) =>
	str ? String(str).charAt(0).toUpperCase() + String(str).slice(1) : '';

// Raster image references point at the optimised .webp the build generates
// (see scripts/optimize-images.mjs). Callers can author .png/.jpg and still get
// the .webp; non-raster refs (.svg/.gif/.webp) are left untouched.
export const toWebp = (src: string | undefined): string | undefined =>
	src?.replace(/\.(png|jpe?g)$/i, '.webp');

// --- Content loading -------------------------------------------------------
// import.meta.glob needs a *static* string literal, so we glob each content
// folder separately. The folder a file lives in decides its type:
//   src/content/posts/*.md     -> blog dev-logs   (Post,    shown on /posts)
//   src/content/projects/*.md  -> final writeups  (Project, shown on /projects)
const postFiles = import.meta.glob('/src/content/posts/*.md', { eager: true });
const projectFiles = import.meta.glob('/src/content/projects/*.md', { eager: true });

type Content = { slug: string; date: string; published: boolean; example?: boolean };

// `example: true` content (the annotated templates) is dev-only — it renders
// while running `vite dev` but is stripped from prod builds. import.meta.env.DEV
// is statically inlined by Vite, so the branch is compiled out of the bundle.
export const showExample = import.meta.env.DEV;

// Turn a glob record into a sorted (newest-first), published-only list.
const collect = <T extends Content>(files: Record<string, unknown>): T[] => {
	const items: T[] = [];
	for (const path in files) {
		const file = files[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = (file as { metadata: Omit<T, 'slug'> }).metadata;
			const item = { ...metadata, slug } as T;
			if (item.example && !showExample) continue;
			if (item.published) items.push(item);
		}
	}
	return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// A post belongs to a project via `project: slug` and/or `projects: [slug, ...]`.
const projectsOf = (p: { project?: string; projects?: string[] }): string[] =>
	[p.project, ...(p.projects ?? [])].filter((s): s is string => Boolean(s));

export const getPosts = async (): Promise<Post[]> => collect<Post>(postFiles);
export const getProjects = async (): Promise<Project[]> => collect<Project>(projectFiles);

// The dev-log for a project: every published post that points at its slug.
export const getPostsForProject = async (projectSlug: string): Promise<Post[]> =>
	(await getPosts()).filter((p) => projectsOf(p).includes(projectSlug));

// Build-time sanity check: warn (at module load) about posts pointing at a
// project slug that doesn't exist — catches typos in the `project:` field.
const knownProjects = new Set(
	Object.keys(projectFiles).map((p) => p.split('/').at(-1)!.replace('.md', ''))
);
for (const path in postFiles) {
	const meta = (postFiles[path] as { metadata?: { project?: string; projects?: string[] } })
		.metadata;
	for (const ref of projectsOf(meta ?? {})) {
		if (!knownProjects.has(ref)) {
			console.warn(`[content] ${path} references unknown project "${ref}"`);
		}
	}
}
