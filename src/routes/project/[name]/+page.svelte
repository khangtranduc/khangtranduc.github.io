<script lang="ts">
    export let data;
</script>

<main style="background-color: {data.name}" style:--card="{data.name}">
    <h1>{data.name}</h1>
</main>

<style lang="scss">
    main {
        width: 100vw;
        height: 91.5vh;
        view-transition-name: var(--card);
    }
</style>