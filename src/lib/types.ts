export type Tag = 'test1' | 'test2';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: Tag[];
	published: boolean;
};
