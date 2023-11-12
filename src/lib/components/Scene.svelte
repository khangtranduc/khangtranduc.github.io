<script lang="ts">
  import { T, useFrame, useThrelte } from '@threlte/core';
  import fragmentShader from '../../shaders/splash.frag?raw';
  import { onMount } from 'svelte';

  let innerWidth: number;
  let innerHeight: number;

  const uniforms = {
    u_resolution: { value: { x: 0, y: 0 } },
    u_time: { value: 0.0 },
    u_mouse: { value: { x: 0, y: 0 } },
  }

  const { invalidate } = useThrelte()

  useFrame((state, delta) => {
    uniforms.u_time.value += delta;
  })

  onMount(() => {
    uniforms.u_resolution.value.x = innerWidth;
    uniforms.u_resolution.value.y = innerHeight;
  })
</script>

<svelte:window 
  bind:innerHeight 
  bind:innerWidth 
  on:resize={() => {
    uniforms.u_resolution.value.x = innerWidth;
    uniforms.u_resolution.value.y = innerHeight;
  }}/>

<T.OrthographicCamera
  makeDefault
  position={[0,0,1]}
  on:create={({ref}) => {
      ref.lookAt(0,0,0)
  }}
/>



<T.Mesh>
  <T.PlaneGeometry 
    on:resize={invalidate}
    args={ [innerWidth/2, innerHeight/2] }
    />
  <T.ShaderMaterial
    {uniforms}
    {fragmentShader}
  />
</T.Mesh>