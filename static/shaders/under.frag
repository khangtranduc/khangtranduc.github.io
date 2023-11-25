#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.1415926538
#define f 2.5 //Hz

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_dark;

float wave( in vec2 st , in float a , in float phase ) {
    return .1 * cos(2. * PI * f/3. * st.x + 1.5 * u_time + phase) * pow(sin(2. * PI * f * st.x + phase), 2.) + a;
}

vec3 rgb(in float r, in float g, in float b){
    return vec3(r, g, b)/255.;
}

void main() {
    vec2 st = gl_FragCoord.xy/vec2(2560, u_resolution.y);
    vec3 color = vec3(0.);

    color = rgb(97., 64., 148.);

    color = u_dark + (-2. * u_dark + 1.) * color;

    color.g += 3. * abs(wave(st, .07, .5)) * smoothstep(.32, -.2, st.y);
    color.b += 3. * abs(wave(st, .13, .0)) * smoothstep(.32, -.2, st.y);

    gl_FragColor = vec4(color, 1.);
}