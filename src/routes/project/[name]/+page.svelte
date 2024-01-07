<script lang="ts">
    export let data;
</script>

<main>
    <article style:--card="{data.name}" style="background-color: {data.name}">
        <h1>{data.name}</h1>
    </article>
</main>

<style lang="scss">
    main {
        width: 100vw;
        height: 91.5vh;
        article {
            margin: none;
            height: 100%;
            view-transition-name: var(--card);
        }
    }
</style>