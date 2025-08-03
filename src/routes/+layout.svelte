<script lang="ts">
	import '../app.css';
	import 'iconify-icon';
	import { capitalize } from '$lib/utils';

	import { page } from "$app/state";

	let title = $derived(page.route.id == '/' ? "khangtranduc" : capitalize(page.route.id?.split("/").at(-1)))

	$effect(() => console.log(page.route.id?.split("/").at(-1)));

	let { children } = $props();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<nav>
	<a href="/"><img src="/favicon.png" alt="logo" /></a>
</nav>

{@render children?.()}

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
