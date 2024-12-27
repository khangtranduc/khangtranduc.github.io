<script lang="ts">
	import '../../app.css';
	import 'iconify-icon';
</script>

<nav>
	<a href="/"><img src="/favicon.png" alt="logo" /></a>

	<div class="navbar">
		<a href="/">home</a>
		<a href="/projects">projects</a>
		<a href="/downloads/khang-tran-resume.pdf" target="_blank">resume</a>
		<a href="/posts">posts</a>
	</div>
</nav>

<slot />

<style>
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
		background-color: white;
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
		color: black;

		transition: .3s;

		&:hover {
			text-decoration: solid underline var(--border-size-2);
		}
	}

</style>
