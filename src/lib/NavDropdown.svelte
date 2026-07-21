<script lang="ts">
	import type { Snippet } from 'svelte';

	let { label, children }: { label: string; children: Snippet } = $props();

	// `open` tracks the trigger, `maintain` the panel — the panel keeps itself
	// alive so the cursor can travel from the trigger into it without closing.
	let open = $state(false);
	let maintain = $state(false);
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<span class="dropdown" onmouseenter={() => (open = true)} onmouseleave={() => (open = false)}>
	<a href={'#'}>{label}</a>

	{#if open || maintain}
		<div
			class="panel"
			role="menu"
			tabindex="-1"
			onmouseenter={() => (maintain = true)}
			onmouseleave={() => (maintain = false)}
		>
			{@render children()}
		</div>
	{/if}
</span>

<style>
	/* Full nav height so the panel's `top: 100%` lands on the nav's bottom edge. */
	.dropdown {
		position: relative;
		height: 100%;

		display: flex;
		align-items: center;
	}

	.panel {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-2);

		padding: var(--size-3) var(--size-4);
		background-color: var(--surface);
		border: var(--border-size-1) solid var(--border);
		border-top: none;
		border-radius: 0 0 var(--radius-2) var(--radius-2);

		font-size: var(--font-size-1);
		white-space: nowrap;
	}

	a {
		font-weight: var(--font-weight-6);
		text-decoration: none;
		color: var(--text);

		transition: 0.3s;

		&:hover {
			color: var(--nav-hover);
		}
	}
</style>
