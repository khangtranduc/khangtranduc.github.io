<script lang="ts">
    import Intro from "./intro.svelte";
    import Education from "./education.svelte";
</script>

<div class="container-fluid">
    <Intro/>
    <Education/>
</div>

<style lang="scss">
    .container-fluid {
        display: flex;
        flex-direction: column;
        padding: 0;
        gap: 2rem;
    }
</style>