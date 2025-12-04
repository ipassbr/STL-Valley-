// Basic fragment shader
// Placeholder for custom fragment shaders

precision mediump float;

uniform vec3 color;
uniform float opacity;

varying vec3 vNormal;
varying vec2 vUv;

void main() {
  vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
  float light = max(dot(vNormal, lightDir), 0.3);
  
  gl_FragColor = vec4(color * light, opacity);
}

