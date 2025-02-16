import { sv } from "./cursor/variables.js";

export function styleThisPageNavLink(link) {
  link.style.opacity = 1;
}

export function toggleMobileMenu() {
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const burgerIcon = document.getElementById("burgerIcon");
  const burgerWavyIcon = document.getElementById("burgerWavyIcon");

  hamburgerMenu.addEventListener("click", () => {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu.style.display === "none") {
      mobileMenu.style.display = "flex";
      document.body.style.overflow = "hidden";
      burgerIcon.style.display = "none";
      burgerWavyIcon.style.display = "block";
      sv.lenis.stop();
      gsap.to(mobileMenu, {
        duration: 0.5,
        ease: "power3.out",
        opacity: 1,
        onComplete: () => {},
      });
    } else {
      burgerIcon.style.display = "block";
      burgerWavyIcon.style.display = "none";
      gsap.to(mobileMenu, {
        duration: 0.5,
        ease: "power3.in",
        opacity: 0,
        onComplete: () => {
          mobileMenu.style.display = "none";
          document.body.style.overflow = "auto";
          sv.lenis.start();
        },
      });
    }
  });
}
