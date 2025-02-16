import { sv } from "./variables.js";

export async function loadShaders() {
  console.log(" loading shaders ");

  const vertex = `
in vec2 aPosition;
in vec2 aUV;
in vec2 aPositionOffset;
in float aAlpha;

out vec2 vUV;
out float vAlpha;
uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;

void main() {

    mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
    gl_Position = vec4((mvp * vec3(aPosition + aPositionOffset, 1.0)).xy, 0.0, 1.0);

    vUV = aUV;
    vAlpha = aAlpha;
}
  `;

  const fragment = `
precision mediump float;

in vec2 vUV;
in float vAlpha;
// in float vIndex;

uniform sampler2D myTexture;
uniform float time;
uniform vec2 mousePos;
uniform float mouseVelocity;

void main() {
    gl_FragColor = texture2D(myTexture, vUV) * (vAlpha);
    // gl_FragColor = texture2D(myTexture, vUV);
    // gl_FragColor = vec4(1.0, 0.0, mousePosX, 1.0);
}
  `;

  return { vertex, fragment };
}
