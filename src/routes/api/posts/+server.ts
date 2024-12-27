import { json } from '@sveltejs/kit';
import { getPosts } from '$lib/utils';

export const prerender = true;

export async function GET() {
	let posts = await getPosts();

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	posts = posts.filter(post => post.published);

	return json(posts);
}
