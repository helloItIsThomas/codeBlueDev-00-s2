import { v } from "./variables.js";
import { initLoadingScreen } from "./loadingScreen.js";
import { disableScroll } from "./utils.js";
import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";
import { getTideData } from "./pullData.js";
// import { sketch } from "./tideSketch.js";

document.addEventListener("DOMContentLoaded", async () => {
  const logoLottie = await setupSplash();
  await initLoadingScreen(logoLottie);
  // new p5(sketch, "tideCanvas");
});

export async function setupSplash() {
  console.log("running splash setup");
  // The 'passive' option here indicates whether the event listener can call preventDefault() to prevent the default scrolling behavior. Setting it to false allows preventDefault() to be used.
  window.addEventListener("wheel", disableScroll, { passive: false });
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
  const loadingScreen = document.getElementById("loadingScreen");
  // loadingScreen.style.overflow = "hidden"; // Prevent scrolling
  // document.body.style.overflow = "hidden"; // Lock the body scroll
  loadingScreen.scrollTo(0, 0); // Scroll to the top of the loading screen

  // LOAD logoLottie start
  const logoLottie = new DotLottie({
    autoplay: false,
    loop: false,
    canvas: document.getElementById("lottieCanvas"),
    src: "/assets/lottie/logo.lottie",
  });
  await new Promise((resolve) => {
    logoLottie.addEventListener("load", () => {
      resolve(logoLottie);
    });
  });
  // LOAD logoLottie end

  return logoLottie;
}
