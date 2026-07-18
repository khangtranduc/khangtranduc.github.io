<script lang="ts">
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>Projects | {data.meta.title}</title>
</svelte:head>

<main>
	<article>
		<hgroup>
			<h1>{data.meta.title}</h1>
			<p class="date">published at {formatDate(data.meta.date)}</p>
			<div class="meta">
				{#if data.meta.status}<span class="status {data.meta.status}">{data.meta.status}</span>{/if}
				{#if data.meta.repo}<a href={data.meta.repo} target="_blank" rel="noreferrer">repo</a>{/if}
				{#if data.meta.demo}<a href={data.meta.demo} target="_blank" rel="noreferrer">demo</a>{/if}
				{#if data.meta.report}<a href={data.meta.report} target="_blank" rel="noreferrer">report</a>{/if}
			</div>
			<div class="tags">
				{#each data.meta.tags as tag}
					<span>&num;{tag}</span>
				{/each}
			</div>
		</hgroup>

		<div class="prose">
			<data.content />
		</div>

		{#if data.relatedPosts.length}
			<section class="devlog">
				<h2>dev log</h2>
				<div class="posts">
					{#each data.relatedPosts as post}
						<a class="post" href="/posts/{post.slug}">
							<h3>{post.title}</h3>
							<span class="date">{formatDate(post.date, 'long')}</span>
							<p>{post.description}</p>
						</a>
					{/each}
				</div>
			</section>
		{/if}
	</article>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
	}

	article {
		display: flex;
		flex-direction: column;
		width: clamp(5rem, 100vw - var(--size-9), var(--measure));

		margin-left: var(--size-6);
		margin-right: var(--size-6);

		/* Keep the last block (references / dev log) off the viewport bottom */
		padding-bottom: var(--size-9);
	}

	hgroup {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.date {
		color: var(--text-muted);
	}

	.meta {
		display: flex;
		align-items: center;
		gap: var(--size-3);
	}

	.meta a {
		color: var(--accent);

		&:hover {
			color: var(--accent-hover);
		}
	}

	.status {
		padding: 0 var(--size-2);
		border-radius: var(--radius-round);
		font-size: var(--font-size-fluid-0);
		color: var(--stone-9);
	}

	.status.in-progress {
		background-color: var(--yellow-2);
	}

	.status.complete {
		background-color: var(--green-2);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-3);
		margin: 0;

		> * {
			padding: var(--size-1) var(--size-2);
			border-radius: var(--radius-round);
			background-color: var(--chip-bg);
			border: var(--border-size-1) solid var(--chip-border);
			color: var(--text-muted);
		}
	}

	.devlog {
		margin-top: var(--size-8);
		border-top: var(--border-size-1) solid var(--border);
		padding-top: var(--size-5);
		margin-bottom: var(--size-8);
	}

	.devlog h2 {
		margin-bottom: var(--size-4);
	}

	.posts {
		display: flex;
		flex-direction: column;
		gap: var(--size-4);
	}

	.post {
		display: flex;
		flex-direction: column;
		gap: var(--size-1);

		text-decoration: none;
		color: inherit;
		transition: 0.3s;

		&:hover h3 {
			color: var(--accent);
		}
	}

	.post h3 {
		color: var(--text);
	}

	.post .date {
		font-size: var(--font-size-fluid-0);
	}
</style>
