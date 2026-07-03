import { error } from '@sveltejs/kit';
import { getPostsForProject } from '$lib/utils';

export async function load({ params }) {
	try {
		const project = await import(`../../../../content/projects/${params.slug}.md`);

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
