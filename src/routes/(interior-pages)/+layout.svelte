<script lang="ts">
	import '../../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/jetbrains-mono';
	import 'iconify-icon';

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
			<a href="/downloads/tran_khang_resume.pdf" target="_blank">resume</a>
			<a href="/posts">posts</a>
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
		left: 0;

		display: flex;
		align-items: center;

		height: var(--size-9);
		width: 100vw;
		padding-left: var(--size-4);
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

	a {
		font-weight: var(--font-weight-6);
		text-decoration: none;
		color: var(--text);

		transition: .3s;

		&:hover {
			color: var(--accent);
		}
	}

</style>
