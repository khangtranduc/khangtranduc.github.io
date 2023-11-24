<script lang="ts">
  import { T, useFrame, useThrelte } from '@threlte/core';
  import { getText } from '$lib/funcs';

  let innerWidth: number;
  let innerHeight: number;
  let height: number;
  let width: number;
  let devicePixelRatio: number;

  export let shader: string;

  const uniforms = {
    u_resolution: { value: { x: 0.0, y: 0.0 } },
    u_time: { value: 0.0 },
    u_mouse: { value: { x: 0.0, y: 0.0 } },
  }

  const { invalidate } = useThrelte();

  useFrame((_, delta) => {
    uniforms.u_time.value += delta;
  })
  $: height = innerHeight;
  $: width = innerWidth;
  $: uniforms.u_resolution.value.x = Math.floor(width * devicePixelRatio);
  $: uniforms.u_resolution.value.y = Math.floor(height * devicePixelRatio);
</script>

<svelte:window 
  bind:innerHeight
  bind:innerWidth
  bind:devicePixelRatio
  on:mousemove={(e) => {
    uniforms.u_mouse.value.x = Math.floor(e.clientX * devicePixelRatio);
    uniforms.u_mouse.value.y = Math.floor((height - e.clientY) * devicePixelRatio);
  }}/>

<T.OrthographicCamera
  makeDefault
  args={[width/2, width/2, height/2, height/2, 0, 1000]}
  position={[0,0,0]}
  on:create={({ref}) => {
      ref.lookAt(0, 0, 0)
  }}
/>

{#await getText(`/shaders/${shader}.frag`) then fragmentShader}
  <T.Mesh>
    <T.PlaneGeometry
      on:change={invalidate}
      args={ [width, height] }
      />
    <T.ShaderMaterial
      {uniforms}
      {fragmentShader}
    />
  </T.Mesh>
{/await}