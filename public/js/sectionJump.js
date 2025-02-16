import { splitType } from "./splitType.js";
import { disableScroll } from "./utils.js";
export function setupToContainer() {
  const toPurposeTimeline = gsap.timeline({
    duration: 0.5,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: "#purpose",
      start: "top-=49% center",
      end: "bottom-=85% center",
      scrub: true,
      markers: false,
      // onEnter onLeave onEnterBack onLeaveBack
      // toggleActions: "play none reverse none",
      // onEnter: () => {
      //   splitType();
      //   toContainer("purpose");
      // },
      // onEnterBack: () => {
      //   toContainer("splash");
      // },
    },
  });

  const toMissionTimeline = gsap.timeline({
    duration: 0.5,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: "#mission",
      start: "top-=45% center",
      end: "bottom-=55% center",
      scrub: false,
      markers: false,
      //   onEnter onLeave onEnterBack onLeaveBack
      // toggleActions: "play none reverse none",
      // onEnter: () => {
      //   toContainer("mission");
      // },
      // onEnterBack: () => {
      //   toContainer("purpose");
      // },
    },
  });

  const splashNavBar = document.querySelectorAll(".navBar");
  toPurposeTimeline.to(splashVideo, { opacity: 0 }, 0);
  toPurposeTimeline.to(
    splashNavBar,
    { opacity: 0, y: "-100%", duration: 0.5, ease: "power1.out" },
    0
  );

  const splashArrow = document.getElementById("splashCTA");
  splashArrow.addEventListener("click", () => {
    toContainer("purpose");
  });
  // const purposeArrow = document.getElementById("purposeCTA");
  // purposeArrow.addEventListener("click", () => {
  // toContainer("mission");
  // });
}

function toContainer(container) {
  window.addEventListener("wheel", disableScroll, {
    passive: false,
  });
  gsap.to(window, {
    duration: 1,
    ease: "power3.out",
    scrollTo: { y: `#${container}` },
    onComplete: () => {
      window.removeEventListener("wheel", disableScroll);
    },
  });
}
