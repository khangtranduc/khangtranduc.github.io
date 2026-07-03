import { getProjects } from '$lib/utils';

export async function load() {
	return { projects: await getProjects() };
}
