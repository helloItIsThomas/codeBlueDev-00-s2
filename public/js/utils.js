import { sv } from "./cursor/variables.js";
// °°°°°°  ____________________  °°°°°°
// °°°°°°  EVENT LISTENERS BELOW °°°°°°
document.addEventListener("mousemove", (event) => {
  // cursorGraphics.x = event.clientX;
  // cursorGraphics.y = event.clientY;

  // for the new cursor
  sv.prevMousePos.x = sv.mousePos.x;
  sv.prevMousePos.y = sv.mousePos.y;
  sv.mousePos.x = event.clientX;
  sv.mousePos.y = event.clientY;
});
// °°°°°°  EVENT LISTENERS ABOVE °°°°°°
// °°°°°°  ____________________  °°°°°°

function topFunction() {
  const distance = tbc.scrollTop; // Distance from the top
  const maxDistance = tbc.scrollHeight - tbc.clientHeight;
  const minDuration = 0.1;
  const maxDuration = 2.0;

  const d =
    (distance / maxDistance) * (maxDuration - minDuration) + minDuration;

  gsap.to(tbc, {
    scrollTop: 0,
    duration: d,
    ease: "power2.inOut",
    onComplete: () => {
      contentToggle();
    },
  });
}

function instantTopFunction() {
  gsap.to(tbc, {
    scrollTop: 0,
    duration: 0.01,
    ease: "power2.inOut",
    onComplete: () => {},
  });
}

export async function getJsonDataFromURL(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export const disableScroll = (event) => {
  event.preventDefault();
};

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {}, 200); // Adjust the debounce delay as needed
});
