<script>
    import { T, useFrame } from '@threlte/core';
    const fragmentShader = `
        #ifdef GL_ES
        precision mediump float;
        #endif

        uniform float u_time;

        void main() {
        gl_FragColor = vec4(abs(sin(u_time)),0.0,0.0,1.0);
        }
    `
    const uniforms = {
      u_time: { value: 0.0 },
    }
    useFrame((state, delta) => {
      uniforms.u_time.value += delta;
    })
  </script>
  
  <T.Mesh>
    <T.BoxGeometry/>
    <T.ShaderMaterial
      {uniforms}
      {fragmentShader}
    />
  </T.Mesh>