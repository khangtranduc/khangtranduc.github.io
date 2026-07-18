<script lang="ts">
	import { formatDate } from '$lib/utils';

	let { data } = $props();

	let tags = [...new Set(data.posts.map(post => post.tags).flat())];
	let tagSelect = $state(new Array(tags.length).fill(true));

	let currentTagSelection = $derived(tags.filter((id, idx, e) => tagSelect[idx]));

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
		padding: var(--size-1) var(--size-2);
		border: var(--border-size-1) solid var(--border);

		font-size: var(--font-size-fluid-0);

		color: var(--text-muted);
		background-color: var(--surface);

		transition: .3s;

		&:hover {
			border-color: var(--accent);
			color: var(--accent);
		}
	}

	.tag-group {
		display: flex;
		gap: var(--size-3);
	}

	.tag-select {
		width: 100%;
		overflow: auto;

		display: flex;
		gap: var(--size-3);
	}

	.selected {
		background-color: color-mix(in srgb, var(--accent) 14%, var(--surface));
		border-color: var(--accent);
		color: var(--accent);
	}

	.tags {
		display: flex;
		gap: var(--size-3);

		margin: 0;
		margin-top: var(--size-1);

		> * {
			padding: var(--size-1) var(--size-2);
			border-radius: var(--radius-round);
			background-color: var(--chip-bg);
			border: var(--border-size-1) solid var(--chip-border);
			color: var(--text-muted);
		}
	}

	.posts {
		display: flex;
		flex-direction: column;
		gap: var(--size-5);

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
		gap: var(--size-1);
	}

	.post h2 a {
		color: var(--text);
		text-decoration: none;
		transition: 0.3s;

		&:hover {
			color: var(--accent);
		}
	}

	.post > span {
		color: var(--text-muted);
		font-size: var(--font-size-fluid-0);
	}

	.post p {
		color: var(--text-muted);
	}
</style>
