function preloadImage(_img) {
  const src = _img.getAttribute("data-src");
  if (!src) {
    return;
  } else {
    _img.src = src;

    _img.onloadeddata = function () {
      // for vidoes
      setTimeout(function () {
        _img.classList.add("appear");

        gsap.to(".appear", {
          opacity: 1,
          duration: 0.333,
          ease: "power1.out",
          stagger: 0.03,
        });
      }, 100);
    };

    _img.onload = function () {
      // for images
      setTimeout(function () {
        _img.classList.add("appear");
        gsap.to(".appear", {
          opacity: 1,
          duration: 0.333,
          ease: "power1.out",
          stagger: 0.03,
        });
      }, 100);
    };
  }
}

function myLazyLoad() {
  const images = document.querySelectorAll("[data-src]");

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        preloadImage(entry.target);
        appearOnScroll.unobserve(entry.target);
      }
    });
  });

  images.forEach((image) => {
    appearOnScroll.observe(image);
  });
}
