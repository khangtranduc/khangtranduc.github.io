#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.141592653589793

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 st = 0.5 - gl_FragCoord.xy/u_resolution;
    float a = 0.5;
    float w = 2.;
    float pct = smoothstep(0.3, 0.1, length(st)) * (0.5 * (1. - a) * sin(w * u_time) + 0.5 * (1. + a));
    // vec3(241./255.)
    gl_FragColor = vec4(vec3(0, 0, pct), 1.);
}