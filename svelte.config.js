import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex-svelte';

let highlighter;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],

			highlight: {
				highlighter: async (code, lang = 'text') => {
					if (!highlighter){
						highlighter = await createHighlighter({
							themes: ['poimandres'],
							langs: ['javascript', 'typescript']
						});
						await highlighter.loadLanguage('javascript', 'typescript', 'cpp');
					}
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
					return `{@html \`${html}\`}`;
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
