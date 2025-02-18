export const sv = {
  pApp: null,
  clock: 0,
  triangles: [],
  totalTriangles: calculateTotalTriangles(),
  mousePos: { x: 0, y: 0 },
  prevMousePos: { x: 0, y: 0 },
  lenis: null,
};

export const gui = {
  angleMult: 0.5,
  maxTravelDist: 40,
  speed: 0.01,
};

function calculateTotalTriangles() {
  return Math.max(
    Math.floor(document.body.clientWidth / 7),
    Math.floor(document.body.clientHeight / 7)
  );
}
