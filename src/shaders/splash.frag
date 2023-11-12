#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    // vec2 u_resolution = vec2(2560, 1282);
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 pct = vec3(distance(st, vec2(0.5)));
    gl_FragColor = vec4(pct, 1.0);
}