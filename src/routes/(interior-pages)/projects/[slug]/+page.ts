import { error } from '@sveltejs/kit';
import { getPostsForProject, getProjects, showExample } from '$lib/utils';

// 'auto' rather than inheriting `true`: in prod every project may be
// example-only, leaving this route with zero pages, which a strict
// `prerender = true` treats as a build error. 'auto' still prerenders the real
// slugs from entries() below but tolerates the route being legitimately empty.
export const prerender = 'auto';

// Explicitly enumerate which slugs to prerender instead of relying on crawl
// discovery. getProjects() already drops example content in prod, so those
// pages are simply never generated (and the route can be legitimately empty).
export async function entries() {
	return (await getProjects()).map((p) => ({ slug: p.slug }));
}

export async function load({ params }) {
	try {
		const project = await import(`../../../../content/projects/${params.slug}.md`);

		// Example content is dev-only — 404 it in prod even on a direct URL.
		if (project.metadata?.example && !showExample) error(404, `Could not find ${params.slug}`);

		return {
			content: project.default,
			meta: project.metadata,
			// Auto-collected dev-log: published posts whose `project:` field
			// matches this project's slug.
			relatedPosts: await getPostsForProject(params.slug)
		};
	} catch {
		error(404, `Could not find ${params.slug}`);
	}
}
