import { setupToContainer } from "./sectionJump.js";
import { disableScroll } from "./utils.js";
import { getTideData } from "./pullData.js";
import { v } from "./variables.js";
import { sv } from "./cursor/variables.js";

// test for test branch
// a second test for test branch

export async function initLoadingScreen(_logoLottie) {
  window.scrollTo({
    top: 0, // Replace with your desired vertical scroll position
    behavior: "instant",
  });

  const timer = {
    val: 0,
  };
  // const tideData = await getTideData();
  // v.tideData = tideData;

  const percentLoadedElement = document.getElementById("percentLoaded");

  gsap.to(timer, {
    val: 1.0,
    duration: 2.0,
    onUpdate: () => {
      _logoLottie.setFrame(Math.ceil(timer.val * _logoLottie.totalFrames));

      const percentLoadedValue = gsap.getProperty(timer, "val");
      percentLoadedElement.textContent =
        Math.ceil(percentLoadedValue * 100) + "%";
    },
    onComplete: () => {
      gsap.to(loadingScreen, {
        opacity: 0,
        duration: 3.5,
        ease: "power3.inOut",
        onUpdate: () => {},
        onComplete: () => {
          loadingScreen.style.display = "none";
          document.body.style.overflow = "auto";
          unlockSplash();
        },
      });
    },
  });

  setupToContainer();
}

function unlockSplash() {
  const splashCTA = document.getElementById("splashCTA");
  splashCTA.style.display = "flex";
  gsap.to(splashCTA, {
    opacity: 1,
    delay: 0,
    duration: 1,
    ease: "power3.inOut",
    onComplete: () => {
      sv.lenis.start();
      window.removeEventListener("wheel", disableScroll);
    },
  });
}

function splashTextToggle() {
  const text = document.getElementById("splashStatement");
  const logoCanvas = document.getElementById("lottieCanvas");
  const splashCTA = document.getElementById("splashCTA");
  gsap.to(logoCanvas, {
    opacity: 0,
    delay: 3,
    duration: 1,
    ease: "power3.inOut",
    onComplete: () => {
      logoCanvas.style.display = "none";
      splashCTA.style.display = "flex";
      text.style.display = "block";
      gsap.to([text, splashCTA], {
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.5,
        onComplete: () => {
          sv.lenis.start();
        },
      });
    },
  });
}

export function onProgress(loaded) {
  console.log("loaded", loaded);
}
