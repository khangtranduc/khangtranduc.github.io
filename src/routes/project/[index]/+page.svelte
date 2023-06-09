<script lang="ts">
    import { page } from '$app/stores';
    import type { Project } from '$lib/types';
    import { getDesc } from '$lib/funcs';
    import { fly } from 'svelte/transition';
    export let data;
    let project: Project = $page.data.projects[data.index];
</script>

<main class="container-fluid" transition:fly={{ y: 200, duration: 300 }}>
    {#if project.src}
        <img alt="" src={project.src}/>
    {:else}
        <img alt="" src="/waves.gif"/>
    {/if}

    <section>
        <hgroup>
            <h1>{project.name}</h1>
            {#await getDesc(project.desc)}
                <p>...waiting</p>
            {:then desc}
                <h2>{@html desc}</h2>
            {:catch}
                <h2><lorem/></h2>
            {/await}
        </hgroup>
        <prizegroup>
            <article style="background-color: lightgrey;" data-tooltip="Singapore Science and Engineering Fair">
                <iconify-icon icon="lucide:trophy" width=30/>
                <span><b>Silver</b> in <a href="https://www.science.edu.sg/for-schools/competitions/singapore-science-and-engineering-fair">SSEF</a></span>
            </article>
        </prizegroup>
        <buttongroup>
            {#each project.att ?? [] as att}
            <a href={att.href} role="button" class="outline" target="_blank">
                {att.name}
                <iconify-icon icon={att.icon}/>
            </a>
            {/each}
        </buttongroup>
    </section>
</main>

<style lang="scss">
    prizegroup {
        display: flex;
        flex-direction: row-reverse;
        padding-right: 1rem;
        margin-bottom: 1rem;
        article {
            display: inline flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
            padding: .6rem;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
    }
    main {
        display: flex;
        justify-content: center;
        height: 91.5vh;
        gap: 2rem;
        padding: 5rem;
        > * {
            flex: 1;
        }
        img {
            aspect-ratio: 1 / 1;
            object-fit: cover;
            border-radius: 10px;
        }
        section {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        buttongroup {
            display: flex;
            flex-direction: row-reverse;
            padding-right: 1rem;
            gap: .3rem;
            > a {
                display: flex;
                align-items: center;
                gap: .3rem;
            }
        }
    }
</style>