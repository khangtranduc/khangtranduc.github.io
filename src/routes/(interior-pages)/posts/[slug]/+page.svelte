<script lang="ts">
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>Posts | {data.meta.title}</title>
	<!-- <meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} /> -->
</svelte:head>

<main>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
		<div class="tags">
			{#each data.meta.tags as tag}
				<span>&num;{tag}</span>
			{/each}
		</div>

		<div class="prose">
			<data.content />
		</div>
	</hgroup>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
	}

	hgroup {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: clamp(5rem, 100vw - var(--size-9), 55rem);

		margin-left: var(--size-6);
		margin-right: var(--size-6);
	}

	.tags {
		display: flex;
		gap: var(--size-3);

		margin: 0;

		> * {
			padding: var(--size-2) var(--size-3);
			border-radius: var(--radius-round);
			box-shadow: var(--shadow-2);
			background-color: white;
			/* border: var(--border-size-1) solid; */
		}
	}
</style>
