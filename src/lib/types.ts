export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: string[];
	published: boolean;
	image?: string;
	// Membership link: the slug of the project this dev-log documents.
	// Use `project` for the common one-project case, `projects` if a post
	// spans several. Both are optional and normalized together internally.
	project?: string;
	projects?: string[];
};

export type Project = {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: string[];
	published: boolean;
	image?: string;
	status?: 'in-progress' | 'complete';
	repo?: string;
	demo?: string;
	report?: string;
};
