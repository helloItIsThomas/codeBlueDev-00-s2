// import "/js/p5/lib/p5.min.js";
// import { v } from "./variables.js";
// import { sv } from "./cursor/variables.js";
// import { getTideData } from "./pullData.js";

// OUT OF DATE MAYBE, use the one in pullData.js
// https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations.json?type=waterlevels&units=english
// https://tidesandcurrents.noaa.gov/api-helper/url-generator.html

// export const sketch = (p) => {
//   console.log("launching sketch");
//   let zoff = 0;
//   const particles = [];
//   const DENSITY = 0.15;
//   const noiseScale = 2;
//   const noiseSpeed = 0.002;
//   const amplitude = 120;
//   let mono;
//   let tideData = v.tideData;

//   class Particle {
//     constructor(x, y, size) {
//       this.x = x;
//       this.y = y;
//       this.size = size;
//     }

//     checkMouseover() {
//       const hitboxRadius = this.size / 2 + 40;
//       if (
//         p.mouseX > this.x - hitboxRadius &&
//         p.mouseX < this.x + hitboxRadius &&
//         p.mouseY > this.y - hitboxRadius &&
//         p.mouseY < this.y + hitboxRadius
//       ) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }

//   p.preload = () => {
//     mono = p.loadFont("/assets/fonts/mono-light.ttf");
//   };

//   p.setup = () => {
//     p.pixelDensity(2);
//     // p.noCursor();
//     let tideCanvas = document.getElementById("tideCanvas");
//     let tideCanvasWidth = tideCanvas.clientWidth; // Get width of tideCanvas
//     let tideCanvasHeight = tideCanvas.clientHeight; // Get height of tideCanvas

//     const myCanvas = p.createCanvas(tideCanvasWidth, tideCanvasHeight, p.WEBGL);
//     myCanvas.parent("tideCanvas");
//     p.frameRate(p.max(60, p.getFrameRate()));
//     p.pixelDensity(2);
//     createParticles();
//   };

//   function calculateNumParticles() {
//     return Math.ceil(p.width * DENSITY);
//   }

//   function createParticles() {
//     particles.length = 0;
//     const numParticles = calculateNumParticles();

//     for (let i = 0; i < numParticles; i++) {
//       particles.push(
//         new Particle(p.map(i, 0, numParticles - 5, 0, p.width), p.height / 2, 3)
//       );
//     }
//   }

//   p.draw = () => {
//     if (tideData) {
//       const data = tideData;
//       const textXOff = p.width - 400;
//       p.translate(-p.width / 2, -p.height / 2, 0);
//       p.clear();
//       p.noStroke();
//       p.textFont(mono);
//       p.textSize(16);

//       let seaLevel;
//       let fillCol;

//       for (let n = 1; n < 3; n++) {
//         if (n == 1) {
//           seaLevel = parseFloat(data.currentData.highest); // + parseFloat(data.datums.datums[5].value);
//           fillCol = p.color(255, 255, 255);
//         } else {
//           seaLevel = parseFloat(data.historicData.lowest); // + parseFloat(data.datums.datums[5].value);
//           fillCol = p.color("#104eb2");
//         }
//         const dataYOff = p.map(
//           seaLevel,
//           -2.0, // aveLowLevel,
//           2.0, // aveHighLevel,
//           p.height * 0.1,
//           p.height * 0.9,
//           -2.0, // aveLowLevel,
//           2.0 // aveHighLevel
//         );
//         for (let i = 0; i < particles.length; i++) {
//           const particle = particles[i];

//           const xoff = p.map(particle.x, 0, p.width, 0, noiseScale);
//           const mainNoise = p.noise(xoff, zoff);
//           const subtleNoise =
//             // p.noise(xoff * 2 * n * 3, zoff * 0.5 * n) * n * 0.5;
//             p.noise(xoff * 2 * 1 * 3, zoff * 0.5 * 1) * 1 * 0.5;
//           const yoff = p.map(
//             mainNoise + subtleNoise,
//             0,
//             1.15,
//             -amplitude,
//             amplitude
//           );

//           particle.y = p.height - (yoff + dataYOff);

//           const fadeEdge = p.width * 0;
//           let opacity = 160;
//           if (particle.x < fadeEdge) {
//             opacity = p.map(particle.x, 0, fadeEdge, 0, 255);
//           } else if (particle.x > p.width - fadeEdge) {
//             opacity = p.map(particle.x, p.width - fadeEdge, p.width, 255, 0);
//           }

//           p.fill(fillCol, opacity);
//           p.circle(particle.x, particle.y, particle.size);
//         }
//         p.fill(255);
//         if (n == 1) {
//           p.fill(p.color("#104eb2"));
//           p.text(
//             "HISTORIC: " + data.historicData.year,
//             p.width * 0.05,
//             dataYOff
//           );
//         } else {
//           p.fill(p.color(255));
//           p.text("TODAY", p.width * 0.05, dataYOff);
//         }
//       }

//       p.fill(255, 160);
//       // p.text(`Location: ${data.name}`, textXOff, p.height - 190);
//       // p.text(
//       // `Sea Level: ${data.currentData.highest} ft`,
//       // textXOff,
//       // p.height - 160
//       // );

//       zoff += noiseSpeed;
//       // })
//       // .catch((error) => {
//       // const textXOff = p.width - 400;
//       // p.text(
//       // `Sea Level Data Currently Unavailable`,
//       // textXOff,
//       // p.height - 100
//       // );
//       // console.error("Error fetching tide data: ", error);
//       // });
//     } else {
//       const textXOff = p.width - 400;
//       p.translate(-p.width / 2, -p.height / 2, 0);
//       p.clear();
//       p.noStroke();
//       p.textFont(mono);
//       p.textSize(16);
//       p.text(`Sea Level Data Currently Unavailable`, textXOff, p.height - 100);
//     }
//   };

//   p.windowResized = () => {
//     let tideCanvas = document.getElementById("tideCanvas");
//     let tideCanvasWidth = tideCanvas.clientWidth;
//     let tideCanvasHeight = tideCanvas.clientHeight;
//     p.resizeCanvas(tideCanvasWidth, tideCanvasHeight);
//     createParticles();
//   };
// };
