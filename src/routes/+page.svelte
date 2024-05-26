<script lang="ts">
    let innerHeight: number
    let innerWidth: number
</script>

<svelte:window bind:innerHeight bind:innerWidth/>

<canvas class="glsl-canvas" data-fragment-url="solid.frag" width={innerWidth} height={innerHeight}/>

<style lang="scss">
    canvas {
        width: 100vw;
        height: 100vh;
    }
</style>