<script>
    import { T, useFrame } from '@threlte/core';
    import fragmentShader from '../../shaders/splash.frag?raw';
    const uniforms = {
      u_time: { value: 0.0 },
    }
    useFrame((state, delta) => {
      uniforms.u_time.value += delta;
    })
  </script>

  <T.OrthographicCamera
    makeDefault
    position={[0,0,1]}
    on:create={({ref}) => {
        ref.lookAt(0,0,0)
    }}
  />
  
  <T.Mesh>
    <T.PlaneGeometry args={ [window.innerWidth, window.innerHeight * 0.915] }/>
    <T.ShaderMaterial
      {uniforms}
      {fragmentShader}
    />
  </T.Mesh>