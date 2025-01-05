<script lang="ts">
	import { formatDate } from '$lib/utils';

	let { data } = $props();

	// turn into dictionary ?
	let tags = [...new Set(data.posts.map(post => post.tags).flat())];
	let tagSelect = $state(new Array(tags.length).fill(true));

	let currentTagSelection = $derived(tags.filter((id, idx, e) => tagSelect[idx]));

	// preprocess tags -> post index table -> faster sorting
	let posts = $derived(data.posts.filter(post => post.tags.some(t => currentTagSelection.includes(t))));
</script>

<main>
	<hgroup>
		<h1>posts</h1>
		<p>Some filler text down here</p>
		<div class="tag-group">
			Tags:
			<div class="tag-select">
				{#each tags as tag, i}
					<button class={tagSelect[i] ? "selected" : ""}
						onclick={() => tagSelect[i] = !tagSelect[i]}>{tag}</button>
				{/each}
			</div>
		</div>
	</hgroup>

	<div class="posts">
		{#each posts as post}
			<div class="post">
				<h2><a href="/posts/{post.slug}">{post.title}</a></h2>
				<span>{formatDate(post.date, 'long')}</span>
				<p>{post.description}</p>
				<div class="tags">
					{#each post.tags as tag}
						<span>&num;{tag}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</main>

<style>
	hgroup {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: calc(100% - var(--size-9));

		margin-left: var(--size-6);
		margin-right: var(--size-6);
	}

	button {
		border-radius: var(--radius-round);
		box-shadow: var(--shadow-1);
		padding: var(--size-1) var(--size-2);
		border: none;

		font-size: var(--font-size-fluid-0);

		background-color: white;

		transition: .3s;

		&:hover {
			box-shadow: var(--shadow-3);
			transform: scale(1.01);
		}
	}

	.tag-group {
		display: flex;
		gap: var(--size-3);
	}

	.tag-select { 
		width: 100%;
		overflow: scroll;

		display: flex;
		gap: var(--size-3);
	}

	.selected {
		background-color: var(--yellow-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);

		margin: 0;
		margin-top: var(--size-1);

		> * {
			padding: var(--size-1) var(--size-2);
			border-radius: var(--radius-round);
			box-shadow: var(--shadow-2);
			background-color: white;
			/* border: var(--border-size-1) solid; */
		}
	}

	.posts {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);

		margin-left: var(--size-6);
		margin-top: var(--size-6);
	}

	@media (min-width: 1024px) {
		.posts {
			margin-left: var(--size-fluid-10);
		}
	}

	.post {
		display: flex;
		flex-direction: column;
	}
</style>
