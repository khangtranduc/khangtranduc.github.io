<script lang="ts">
    import { page } from '$app/stores';
    import type { Project } from '$lib/types'
    export let data;
    let project: Project = $page.data.projects[data.index];
</script>

<hgroup>
    <h1>{project.name}</h1>
    {#if project.desc}
        <h2>{project.desc}</h2>
    {:else}
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quisquam, exercitationem natus culpa illum odit alias voluptatem vero possimus quo ad accusamus repudiandae enim laborum doloribus earum aut dignissimos asperiores?</h2>
    {/if}
</hgroup>