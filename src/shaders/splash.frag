#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.1415926538
#define f 7.0 //Hz

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 pulse(float x) {
    return vec3(
        0.5 * sin(2.0 * x) + 0.5,
        0.5 * cos(1.0 * x) + 0.5,
        0.5 * sin(5.0 * x + PI/2.0) + 0.5
        );
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec2 mouse_st = u_mouse/u_resolution;
    float pct = distance(st, vec2(0.5));
    gl_FragColor = vec4(pulse(u_time) * vec3(pow(sin(2.0 * PI * f * pct + u_time), 2.0)), 1.0);
}