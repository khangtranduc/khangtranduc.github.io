<script lang="ts">
	import { fade } from 'svelte/transition';
	import { loadIcon } from 'iconify-icon';

	const links = Object.entries({
		projects: '/projects',
		resume: '/downloads/khang-tran-resume.pdf',
		posts: '/posts'
	});

	const icons = Object.entries({
		'mdi:github': 'https://github.com/khangtranduc',
		'mdi:gmail': 'mailto:khangductran@duck.com',
		'mdi:linkedin': 'https://www.linkedin.com/in/khangtranduc/',
		'ic:baseline-telegram': 'https://t.me/khangductran'
	});

	let showContacts = $state(false);
	let maintain = $state(false);
</script>

<main>
	<hgroup>
		<h1>HI, <span>i'm <mark>khang</mark></span></h1>

		<div class="links">
			{#each links as [label, link], i}
				{#if link.includes('/downloads/')}
					<h2><a href={link} class="contrast" target="_blank">{label}</a></h2>
				{:else}
					<h2><a href={link} class="contrast">{label}</a></h2>
				{/if}

				{#if i < links.length - 1}
					<h2>|</h2>
				{/if}
			{/each}
			<h2>|</h2>
			<h2>
				<a
					href={'#'}
					class="contrast"
					onmouseenter={() => (showContacts = true)}
					onmouseleave={() => setTimeout(() => (showContacts = false), 100)}>contacts</a
				>
			</h2>
		</div>
		<div
			class="contacts"
			role="banner"
			onmouseenter={() => (maintain = showContacts)}
			onmouseleave={() => (maintain = false)}
		>
			{#if showContacts || maintain}
				{#each icons as [icon, link], i}
					<a
						href={link}
						target="_blank"
						in:fade|global={{ delay: (icons.length - i) * 100, duration: 300 }}
						out:fade|global={{ delay: i * 100, duration: 300 }}
					>
						<!-- svelte-ignore block_empty -->
						{#await loadIcon(icon) then _}
							<iconify-icon inline width="40" {icon}></iconify-icon>
						{:catch}
							{icon.split(':')[1]}
						{/await}
					</a>
				{/each}
			{/if}
		</div>
	</hgroup>
</main>

<style>
	main {
		top: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		height: 100vh;
	}

	hgroup {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.3rem;
	}

	h1 {
		font-size: var(--font-size-fluid-4);

		animation-name: intro;
		animation-duration: 3s;
	}

	h2 {
		color: var(--stone-8);

		animation-name: links;
		animation-duration: 3s;
	}

	span {
		font-weight: var(--font-weight-7);
	}

	a {
		text-decoration: none;
		color: inherit;
		transition: 0.3s;

		&:hover {
			transition: 0.3s;
			color: black;
		}
	}

	mark {
		background-color: transparent;
		animation-name: highlight;
		animation-duration: 3s;
		animation-fill-mode: forwards;
		background-size: 200%;
		background-image: linear-gradient(to right, var(--yellow-2) 50%, transparent 50%),
			linear-gradient(var(--bg-col), var(--bg-col));
	}

	.links {
		width: 100%;

		display: flex;
		justify-content: space-between;
		gap: var(--size-1);

		animation-name: links;
		animation-duration: 5s;
	}

	.contacts {
		width: 100%;
		height: var(--size-5);

		display: flex;
		align-items: center;
		gap: var(--size-3);
		justify-content: end;

		padding-top: var(--size-3);
	}

	.contacts iconify-icon {
		color: var(--stone-8);
		transition: 0.3s;

		&:hover {
			color: black;
		}
	}

	@keyframes intro {
		0% {
			transform: translate(0, 100%);
			clip-path: polygon(0 110%, 0 110%, 100% 110%, 100% 110%);
		}
		25% {
			transform: translate(0, 100%);
			clip-path: polygon(0 110%, 0 110%, 100% 110%, 100% 110%);
		}
		50% {
			transform: translate(0, 100%);
			clip-path: polygon(0 110%, 0 0, 100% 0, 100% 110%);
		}
		100% {
			transform: translate(0, 0);
		}
	}

	@keyframes highlight {
		0% {
			background-position: 100%;
		}
		66% {
			background-position: 100%;
		}
		100% {
			background-position: 0%;
		}
	}

	@keyframes links {
		0% {
			opacity: 0;
		}
		33% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
