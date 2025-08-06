precision mediump float;

uniform float uTime; 

void main() {
    vec2 uv = gl_FragCoord.xy / vec2(800.0, 600.0); // Normalize coordinates
    
    // Moving gradient
    float gradient = sin(uv.x * 10.0 + uTime) * sin(uv.y * 10.0 + uTime);
    
    gl_FragColor = vec4(vec3(gradient * 0.5 + 0.5), 1.0);
}