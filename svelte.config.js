import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex-svelte';

const theme = 'monokai';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript', 'cpp', 'c', 'python', 'bash']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		{
			markup: ({ content, filename }) => {
				if (filename?.endsWith('.md')) {
					// Convert ![[image.png]] to ![](image.png)
					content = content.replace(/!\[\[([^\]]+)\]\]/g, '![](/images/$1)');
				}
				return { code: content };
			}
		},
		mdsvex({
			extensions: ['.md'],

			highlight: {
				highlighter: async (code, lang = 'text') => {
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
					return `{@html \`${html}\` }`;
				}
			},

			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatex]
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
		}),
	},

	extensions: ['.svelte', '.md']
};

export default config;
