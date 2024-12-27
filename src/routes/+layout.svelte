<script lang="ts">
	import '../app.css';
	import 'iconify-icon';
</script>

<nav>
	<a href="/"><img src="/favicon.png" alt="logo" /></a>
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

</style>
