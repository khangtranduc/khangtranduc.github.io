<script lang="ts">
	import '../../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/jetbrains-mono';
	import 'iconify-icon';
	import { fade } from 'svelte/transition';
	import { loadIcon } from 'iconify-icon';
	import NavDropdown from '$lib/NavDropdown.svelte';
	import { resumes } from '$lib/resumes';
	import { contacts } from '$lib/contacts';

	let { children } = $props();
</script>

<!-- .themed opts the post/project pages into the Inter look; the landing page
     (root layout only) is left on the site's original system font. -->
<div class="themed">
	<nav>
		<a href="/"><img src="/favicon.png" alt="logo" /></a>

		<div class="navbar">
			<a href="/">home</a>
			<a href="/projects">projects</a>
			<NavDropdown label="resume">
				{#each resumes as [label, link], i}
					<a
						href={link}
						target="_blank"
						in:fade|global={{ delay: i * 60, duration: 300 }}
						out:fade|global={{ delay: (resumes.length - i) * 60, duration: 300 }}>{label}</a
					>
				{/each}
			</NavDropdown>
			<a href="/posts">posts</a>
		</div>

		<div class="contacts">
			{#each contacts as [icon, link]}
				<a href={link} target="_blank" aria-label={icon.split(':')[1]}>
					<!-- svelte-ignore block_empty -->
					{#await loadIcon(icon) then _}
						<iconify-icon inline width="24" {icon}></iconify-icon>
					{:catch}
						{icon.split(':')[1]}
					{/await}
				</a>
			{/each}
		</div>
	</nav>

	{@render children()}
</div>

<style>
	.themed {
		font-family: 'Inter Variable', var(--font-sans);
	}

	nav {
		position: fixed;
		top: 0;
		/* inset rather than `width: 100vw` — 100vw includes the scrollbar gutter,
		   which pushed the right-aligned icons off the visible edge. */
		inset-inline: 0;

		display: flex;
		align-items: center;

		height: var(--size-9);
		padding-inline: var(--size-4);
		z-index: var(--layer-important);
		background-color: var(--surface);
		border-bottom: var(--border-size-1) solid var(--border);
	}
	
	img {
		width: var(--size-7);
	}

	.navbar {
		height: 100%;
		
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
		
		display: flex;
		align-items: center;
		gap: var(--size-5);
	}

	/* `.navbar` is absolutely positioned, so it isn't a flex sibling — auto margin
	   against the logo is what pins the icons to the right edge. */
	.contacts {
		margin-left: auto;

		display: flex;
		align-items: center;
		gap: var(--size-3);
	}

	a {
		font-weight: var(--font-weight-6);
		text-decoration: none;
		color: var(--text);

		transition: .3s;

		&:hover {
			color: var(--nav-hover);
		}
	}

	iconify-icon {
		color: var(--text);
		transition: .3s;

		&:hover {
			color: var(--nav-hover);
		}
	}

</style>
