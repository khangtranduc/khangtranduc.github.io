export type Tag = 'log' | 'engineering' | 'cs' | 'physics' | 'math' | 'website-update';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: Tag[];
	published: boolean;
};
