export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: string[];
	published: boolean;
	image?: string; // only here if it is project (normally)
	pid?: string; // unique identification to relate all projects of a kind
};
