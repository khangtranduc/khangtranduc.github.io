<script lang="ts">
	import { formatDate, toWebp } from '$lib/utils';
	import type { Project } from '$lib/types';

	let { data } = $props();

	const tabs = ['all', 'cs', 'physics', 'engineering', 'math'];
	let selected = $state('all');

	let projects = $derived(
		data.projects.filter((p: Project) => selected === 'all' || p.tags.includes(selected))
	);
</script>

<main>
	<hgroup>
		<h1>projects</h1>
		<div class="tabs">
			{#each tabs as tab, i}
				<a href={'#'} class:active={tab === selected} onclick={() => (selected = tab)}>{tab}</a>
				{#if i < tabs.length - 1}<span>|</span>{/if}
			{/each}
		</div>
	</hgroup>

	<div class="grid">
		{#each projects as project}
			<a class="card" href="/projects/{project.slug}">
				<div class="thumb">
					{#if project.image}
						<img src={toWebp(project.image)} alt={project.title} />
					{/if}
					{#if project.status === 'in-progress'}
						<div class="haze"></div>
					{/if}
					{#if project.status}
						<span class="status {project.status}">{project.status}</span>
					{/if}
				</div>
				<div class="body">
					<h2>{project.title}</h2>
					<span class="date">{formatDate(project.date)}</span>
					<div class="reveal">
						<div class="reveal-inner">
							<p>{project.description}</p>
							<div class="tags">
								{#each project.tags as tag}<span>&num;{tag}</span>{/each}
							</div>
						</div>
					</div>
				</div>
			</a>
		{:else}
			<p class="empty">No projects here yet.</p>
		{/each}
	</div>
</main>

<style>
	hgroup {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		margin-left: var(--size-6);
	}

	.tabs {
		font-size: var(--font-size-4);
		display: flex;
		gap: var(--size-2);
	}

	.tabs a {
		text-decoration: none;
		color: var(--text-muted);
		transition: 0.3s;

		&:hover {
			color: var(--accent);
		}
	}

	.tabs a.active {
		color: var(--text);
		font-weight: var(--font-weight-7);
	}

	.tabs span {
		color: var(--border);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
		gap: var(--size-5);

		margin: var(--size-7) var(--size-6);
	}

	.card {
		display: flex;
		flex-direction: column;

		text-decoration: none;
		color: inherit;
		transition: transform 0.3s;

		&:hover {
			transform: translateY(-2px);
		}
	}

	.thumb {
		position: relative;
		aspect-ratio: 1 / 1;
		overflow: hidden;
		box-shadow: var(--shadow-2);
		transition: box-shadow 0.3s;
	}

	.card:hover .thumb {
		box-shadow: var(--shadow-4);
	}

	.thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	/* white haze over the image while a project is in-progress */
	.haze {
		position: absolute;
		inset: 0;
		background-color: rgb(255 255 255 / 45%);
	}

	.status {
		position: absolute;
		top: var(--size-2);
		right: var(--size-2);
		font-size: var(--font-size-fluid-0);
		padding: 0 var(--size-2);
		border-radius: var(--radius-round);
		white-space: nowrap;
		box-shadow: var(--shadow-2);
		color: var(--stone-9);
	}

	.status.in-progress {
		background-color: var(--yellow-2);
	}

	.status.complete {
		background-color: var(--green-2);
	}

	.body {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--size-1);
		padding: var(--size-3) var(--size-4) var(--size-4);
	}

	.body h2 {
		margin: 0;
	}

	.date {
		color: var(--text-muted);
		font-size: var(--font-size-fluid-0);
	}

	/* description + tags stay collapsed until hover (0fr → 1fr animates the height) */
	.reveal {
		display: grid;
		grid-template-rows: 0fr;
		width: 100%;
		transition: grid-template-rows 0.3s ease;
	}

	.card:hover .reveal {
		grid-template-rows: 1fr;
	}

	.reveal-inner {
		min-height: 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-2);
	}

	.reveal p {
		margin: var(--size-2) 0 0;
		color: var(--text-muted);
		font-size: var(--font-size-fluid-0);

		/* keep it a brief: clamp to three lines */
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--size-2);

		> * {
			padding: var(--size-1) var(--size-2);
			border-radius: var(--radius-round);
			background-color: var(--chip-bg);
			border: var(--border-size-1) solid var(--chip-border);
			color: var(--text-muted);
			font-size: var(--font-size-fluid-0);
		}
	}

	.empty {
		color: var(--text-muted);
	}
</style>
