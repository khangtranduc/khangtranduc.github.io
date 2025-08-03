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
					content = content.replace(/!\[\[([^\]]+\.png)\]\]/g, '![amongus](/images/$1)');
				}
				return { code: content };
			}
		},
		{
			markup: ({ content, filename }) => {
				if (filename?.endsWith('.md')) {
					// Convert ![[doc.pdf]] to Pdf component
					content = content.replace(/!\[\[([^\]]+\.pdf)\]\]/g, 
						`
						<a href="/post_pdfs/$1" target="_blank">$1</a>
						<div>
							<iframe src="/post_pdfs/$1" title="PDF"></iframe>
						</div>
						`);
				}
				return { code: content };
			}
		},
		{
			markup: ({ content, filename }) => {
				if (filename?.endsWith('.md')) {
					// Convert ![](https://www.youtube.com/watch?v=VIDEO_ID) to embedded iframe
					if (content.includes('youtube.com/watch?v=')) {
						content = content.replace(
							/!\[\]\(https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})\)/g,
							`<div class="video-container">
								<iframe src="https://www.youtube.com/embed/$1" title="YouTube video" frameborder="0" allowfullscreen></iframe>
							</div>`
						);
					}
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
