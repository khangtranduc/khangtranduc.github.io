<script lang="ts">
    let tabs = ["cs", "physics", "engineering"];
    let selected_tab = "cs";
</script>

<hgroup>
    <h1>projects</h1>
    <div class="row">
        {#each tabs as tab, i}
        {#if tab == selected_tab}
        <h2><a href={""} class="contrast"><b>{tab}</b></a></h2>
        {:else}
        <h2><a href={""} class="contrast" on:click={() => selected_tab = tab}>{tab}</a></h2>
        {/if}
        {#if i < tabs.length - 1}
        <h2>|</h2>
        {/if}
        {/each}
    </div>
</hgroup>

<style lang="scss">
    hgroup {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        position: absolute;
        top: 10%;
        left: 2%;

    }
    
    .row {
        display: flex;
        flex-direction: row;
        gap: .5rem;
    }
    
    h2 {
        font-size: 1.25rem;
        font-weight: normal;
        color: $grey-600;
    }

    a {
        text-decoration: none;
        color: $grey-600;
        &:hover {
            color: $black;
        }
    }
    
    b {
        color: $black;
    }

    h1 {
        font-weight: 900;
        font-size: 2.5rem;
    }

</style>