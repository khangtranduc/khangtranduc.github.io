<script lang="ts">
  import { T, useFrame, useThrelte } from '@threlte/core';
  import fragmentShader from '../../shaders/splash.frag?raw';

  let tempWidth: number;
  let tempHeight: number;
  let innerWidth: number;
  let innerHeight: number;
  let devicePixelRatio: number;

  const uniforms = {
    u_resolution: { value: { x: 0.0, y: 0.0 } },
    u_time: { value: 0.0 },
    u_mouse: { value: { x: 0.0, y: 0.0 } },
  }

  const { size, invalidate } = useThrelte();

  useFrame((state, delta) => {
    uniforms.u_time.value += delta;
  })
  
  $: innerHeight = Math.floor(tempHeight * 0.915 * devicePixelRatio);
  $: innerWidth = Math.floor(tempWidth * devicePixelRatio);
  $: uniforms.u_resolution.value.x = innerWidth;
  $: uniforms.u_resolution.value.y = innerHeight;
</script>

<svelte:window 
  bind:innerHeight={tempHeight} 
  bind:innerWidth={tempWidth}
  bind:devicePixelRatio
  on:mousemove={(e) => {
    uniforms.u_mouse.value.x = e.clientX;
    uniforms.u_mouse.value.y = e.clientY;
  }}/>

<T.OrthographicCamera
  makeDefault
  args={[innerWidth/2, innerWidth/2, innerHeight/2, innerHeight/2, 0, 1000]}
  position={[0,0,0]}
  on:create={({ref}) => {
      ref.lookAt(0, 0, 0)
  }}
/>



<T.Mesh>
  <T.PlaneGeometry 
    on:change={invalidate}
    args={ [innerWidth, innerHeight] }
    />
  <T.ShaderMaterial
    {uniforms}
    {fragmentShader}
  />
</T.Mesh>