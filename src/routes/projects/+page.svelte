<script lang="ts">
	let tabs = ['cs', 'physics', 'engineering'];
	let selected_tab = 'cs';
</script>

<main>
	<hgroup>
		<h1>projects</h1>
		<div class="row">
			{#each tabs as tab, i}
				{#if tab == selected_tab}
					<h2><a href={''} class="contrast"><b>{tab}</b></a></h2>
				{:else}
					<h2><a href={''} class="contrast" on:click={() => (selected_tab = tab)}>{tab}</a></h2>
				{/if}
				{#if i < tabs.length - 1}
					<h2>|</h2>
				{/if}
			{/each}
		</div>
	</hgroup>
</main>

<style>
	hgroup {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		margin-left: var(--size-6);
	}

	.row {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}

	a {
		text-decoration: none;
		color: var(--stone-8);

		&:hover {
			color: black;
		}
	}

	b {
		color: black;
	}
</style>
