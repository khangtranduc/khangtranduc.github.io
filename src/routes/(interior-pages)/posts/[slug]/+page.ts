import { error } from '@sveltejs/kit';
import { getPosts, showExample } from '$lib/utils';

// 'auto' rather than inheriting `true`: in prod every post may be example-only,
// leaving this route with zero pages, which a strict `prerender = true` treats
// as a build error. 'auto' still prerenders the real slugs from entries() below
// but tolerates the route being legitimately empty.
export const prerender = 'auto';

// Explicitly enumerate which slugs to prerender instead of relying on crawl
// discovery. getPosts() already drops example content in prod, so those pages
// are simply never generated (and the route can be legitimately empty).
export async function entries() {
	return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export async function load({ params }) {
	try {
		const post = await import(`../../../../content/posts/${params.slug}.md`);

		// Example content is dev-only — 404 it in prod even on a direct URL.
		if (post.metadata?.example && !showExample) error(404, `Could not find ${params.slug}`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch {
		error(404, `Could not find ${params.slug}`);
	}
}
