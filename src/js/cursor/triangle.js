import { sv } from "./variables.js";
import { gui } from "./variables.js";

export class Triangle {
  constructor(i, _x, _y, speed) {
    this.id = i;
    this.rand = Math.random() * (0.05 - 0.01) + 0.01;
    this.newPos = { x: _x, y: _y };
    this.speed = speed;
    this.alpha = 0.0;
    this.active = false;
    this.origin = {
      x: _x,
      y: _y,
    };
  }

  make() {
    // console.log("make");
    this.active = true;
    this.alpha = 1.0;
  }
  destroy() {
    // console.log("destroy");
    this.active = false;
    this.alpha = 0.0;
  }

  animate() {
    const angle = (this.id / sv.totalTriangles) * gui.angleMult * Math.PI * 2;
    const vel = sv.clock * 45.0;
    const mouseAccThreshold = 0.025;

    this.newPos = {
      x: (Math.cos(angle) * vel + this.origin.x) % sv.pApp.screen.width,
      y: (Math.sin(angle) * vel + this.origin.y) % sv.pApp.screen.height,
    };

    this.distance = Math.sqrt(
      Math.pow(this.newPos.x - sv.mousePos.x, 2) +
        Math.pow(this.newPos.y - sv.mousePos.y, 2)
    );
    this.normalizedDistance =
      this.distance /
      Math.sqrt(
        Math.pow(sv.pApp.screen.width, 2) + Math.pow(sv.pApp.screen.height, 2)
      );

    const mouseAcceleration =
      Math.sqrt(
        Math.pow(sv.mousePos.x - sv.prevMousePos.x, 2) +
          Math.pow(sv.mousePos.y - sv.prevMousePos.y, 2)
      ) / sv.pApp.screen.width;

    if (1.0 - this.normalizedDistance > 0.95) {
      // if (mouseAcceleration > mouseAccThreshold) {
      if (this.active != true) {
        this.make();
      }
      // }
    }

    const mouseProximityThreshold = 200; // Distance threshold to consider "close"
    const maxVelocity = 60.0; // Maximum velocity
    const acceleration = 8.0; // Acceleration factor
    let currentVelocity = 0; // Current velocity

    if (this.distance < mouseProximityThreshold) {
      const awayAngle = Math.atan2(
        this.newPos.y - sv.mousePos.y * 10,
        this.newPos.x - sv.mousePos.x * 10
      );

      // Increase velocity towards maxVelocity with acceleration
      if (currentVelocity < maxVelocity) {
        currentVelocity += acceleration * (1 - currentVelocity / maxVelocity);
      }

      // Ensure we do not exceed maxVelocity
      currentVelocity = Math.min(currentVelocity, maxVelocity);

      this.newPos.x += Math.cos(awayAngle) * currentVelocity;
      this.newPos.y += Math.sin(awayAngle) * currentVelocity;
    }

    this.alpha = Math.max(0, this.alpha - 0.035);
    if (this.alpha <= 0.001 && this.active == true) {
      this.destroy();
    }
  }
}
