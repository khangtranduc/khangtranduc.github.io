<script lang="ts">
    import { Canvas } from '@threlte/core'
    import Scene from './Scene.svelte'

    export let shader: string;
</script>

<Canvas>
    <Scene {shader}/>
</Canvas>  