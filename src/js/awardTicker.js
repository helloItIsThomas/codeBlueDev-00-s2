export function initAwardTicker(awardsTickerContainer, awardsTicker) {
  // ----- Awards Ticker Code Start -----

  // Function to initialize or remove the ticker animation
  const manageTicker = () => {
    // Reset any inline styles and cloned content
    awardsTicker.style.animation = "";
    awardsTicker.innerHTML = awardsTicker.dataset.originalContent;
    awardsTicker.style.width = "100%";

    let isAnimating = false;

    const needsScroll =
      awardsTicker.scrollWidth > awardsTickerContainer.clientWidth;

    if (needsScroll && !isAnimating) {
      // Clone the awards to create a seamless loop
      const clone = awardsTicker.dataset.originalContent;
      awardsTicker.innerHTML += clone;

      // Calculate the animation duration based on content width
      const totalWidth = awardsTicker.scrollWidth;
      const duration = totalWidth / 100; // Adjust the divisor to control speed

      awardsTicker.style.display = "flex";
      awardsTicker.style.width = "max-content";
      awardsTicker.style.animation = `scroll ${duration}s linear infinite`;

      isAnimating = true;
    } else if (!needsScroll && isAnimating) {
      // Remove cloned awards and stop animation
      awardsTicker.style.animation = "";
      awardsTicker.innerHTML = awardsTicker.dataset.originalContent;
      isAnimating = false;
    }
  };

  // Debounce function to limit the rate at which a function can fire.
  const debounce = (func, wait = 100) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  };

  // Store the original content for easy reset
  awardsTicker.dataset.originalContent = awardsTicker.innerHTML;

  // Initialize the ticker on load
  manageTicker();

  // Add resize event listener with debounce
  window.addEventListener(
    "resize",
    debounce(() => {
      if (window.innerWidth !== previousWidth) {
        previousWidth = window.innerWidth;
        manageTicker();
      }
    })
  );
  let previousWidth = window.innerWidth; // Store the initial width

  // ----- Awards Ticker Code End -----
}
