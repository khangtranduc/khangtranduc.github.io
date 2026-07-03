<script lang="ts">
	import { formatDate } from '$lib/utils';
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
				{#if project.image}
					<img src={project.image} alt={project.title} />
				{/if}
				<div class="body">
					<div class="titlerow">
						<h2>{project.title}</h2>
						{#if project.status}<span class="status {project.status}">{project.status}</span>{/if}
					</div>
					<span class="date">{formatDate(project.date)}</span>
					<p>{project.description}</p>
					<div class="tags">
						{#each project.tags as tag}<span>&num;{tag}</span>{/each}
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
		display: flex;
		gap: var(--size-2);
	}

	.tabs a {
		text-decoration: none;
		color: var(--stone-6);
		transition: 0.3s;

		&:hover {
			color: black;
		}
	}

	.tabs a.active {
		color: var(--stone-9);
		font-weight: var(--font-weight-7);
	}

	.tabs span {
		color: var(--stone-4);
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

		border-radius: var(--radius-3);
		box-shadow: var(--shadow-2);
		background-color: white;
		overflow: hidden;

		text-decoration: none;
		color: inherit;
		transition: 0.3s;

		&:hover {
			box-shadow: var(--shadow-4);
			transform: translateY(-2px);
		}
	}

	.card img {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: var(--size-1);
		padding: var(--size-3) var(--size-4) var(--size-4);
	}

	.titlerow {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: var(--size-2);
	}

	.status {
		font-size: var(--font-size-fluid-0);
		padding: 0 var(--size-2);
		border-radius: var(--radius-round);
		white-space: nowrap;
	}

	.status.in-progress {
		background-color: var(--yellow-2);
	}

	.status.complete {
		background-color: var(--green-2);
	}

	.date {
		color: var(--stone-6);
		font-size: var(--font-size-fluid-0);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-2);
		margin-top: var(--size-1);

		> * {
			padding: var(--size-1) var(--size-2);
			border-radius: var(--radius-round);
			box-shadow: var(--shadow-1);
			background-color: var(--gray-1);
			font-size: var(--font-size-fluid-0);
		}
	}

	.empty {
		color: var(--stone-6);
	}
</style>
