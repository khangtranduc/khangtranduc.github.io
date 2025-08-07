precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy; // Normalize coordinates
    vec2 uvMouse = uMouse.xy;

    uv = uv * 2. - 1.;
    uvMouse = uvMouse * 2. - 1.;

    uv.x *= uResolution.x / uResolution.y;
    uvMouse.x *= uResolution.x / uResolution.y;
    
    float dist = distance(uv, uvMouse);

    vec3 color = vec3(1. - step(.2, dist));

    gl_FragColor = vec4(color, 1.);
}