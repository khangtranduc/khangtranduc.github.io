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

    return .1 * cos(2. * PI * f/3. * st.x + u_time + phase) * pow(sin(2. * PI * f * st.x + phase), 2.) + a;
}

vec3 rgb(in float r, in float g, in float b){
    return vec3(r, g, b)/255.;
}

void main() {
    // Modified st
    vec2 st = gl_FragCoord.xy/vec2(2560, u_resolution.y);
    vec3 color = vec3(0.);

    color = vec3(0.);

    float offset = .7;
    float g_delta = .03;
    float b_delta = .02;
    float grad = .7;

    color.r -= (.6 - step(wave(st, offset, 0.), st.y));
    color.g -= (.7 - step(wave(st, offset - g_delta, .8), st.y));
    color.b -= (.3 - step(wave(st, offset + b_delta, -1.6), st.y));

    // color *= st.y + grad;

    color = u_dark + (-2. * u_dark + 1.) * (color + rgb(250., 243., 225.));

    gl_FragColor = vec4(color, 1.);
}