<script lang="ts">
	import { formatDate } from '$lib/utils.js';

	let tabs = ['all', 'cs', 'physics', 'engineering', 'math'];
	let selected_tab = $state('all');

	let { data } = $props();

	let posts = $derived(data.posts.filter(post => (selected_tab == 'all') ? post.tags.some(t => tabs.includes(t)) : post.tags.some(t => t == selected_tab)));

	$effect.pre(() => posts.forEach(post => post.date = post.date.split('T')[0].split('-')[0]));
</script>

<main>
	<hgroup>
		<h1>projects</h1>
		<div class="row">
			{#each tabs as tab, i}
				{#if tab == selected_tab}
					<h2><a href={''}><b>{tab}</b></a></h2>
				{:else}
					<h2><a href={''} onclick={() => (selected_tab = tab)}>{tab}</a></h2>
				{/if}
				{#if i < tabs.length - 1}
					<h2>|</h2>
				{/if}
			{/each}
		</div>
	</hgroup>

	<div class="row carousel">
		{#each posts as post}
			<article>
				{post.image?.split('/')[-1]}
				<img src={post.image} alt={post.image?.split('/')[-1]}/>
				<h3><b><a target="_blank" href="/posts/{post.slug}">{post.title}</a></b></h3>
				<h3>{post.date}</h3>
				<div class="row">
					{#each post.tags.filter(t => tabs.includes(t)) as tag}
						<h4>({tag})</h4>
					{/each}
				</div>
			</article>
		{/each}
	</div>

</main>

<style>
	main {
		height: calc(100vh - var(--size-9));
	}

	hgroup {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);

		margin-left: var(--size-6);
	}

	a {
		text-decoration: none;
		color: var(--stone-8);
		
		&:hover {
			color: black;
		}
	}
	
	b {
		color: var(--stone-9);
		font-weight: var(--font-weight-7);
	}
	
	.row {
		display: flex;
		flex-direction: row;
		gap: var(--size-2);
	}

	.carousel {
		margin: var(--size-11) var(--size-6);
	}

	@media (max-width: 768px) {
		.carousel {
			display: flex;
			flex-direction: column;
			gap: var(--size-2);
			margin-top: var(--size-6);
		}
	}
	
	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-2);
	}

	article h4, h3:nth-last-child(2) {
		margin-top: 0;
		color: var(--stone-6);
	}

	img {
		width: var(--size-fluid-9);
		aspect-ratio: 1;
		object-fit: cover;
	}

</style>
