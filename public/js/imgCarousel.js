class ImageCarousel {
  constructor() {
    this.slides = document.querySelector(".slides");
    this.images = document.querySelectorAll(".slides .carouselSlide");
    this.prevButtons = document.querySelectorAll("button.prev");
    this.nextButtons = document.querySelectorAll("button.next");
    this.currentIndex = 1;
    this.totalImages = this.images.length;
    this.imageWidth = this.images[0].clientWidth;
    this.isAnimating = false; // Flag to prevent rapid clicks

    // Touch event properties
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.touchThreshold = 50;

    this.setupCarousel();
    this.addEventListeners();
  }

  setupCarousel() {
    // Clone first and last images for infinite looping
    const firstClone = this.images[0].cloneNode(true);
    const lastClone = this.images[this.totalImages - 1].cloneNode(true);
    this.slides.appendChild(firstClone);
    this.slides.insertBefore(lastClone, this.slides.firstChild);
    this.images = document.querySelectorAll(".slides carouselSlide"); // Update images NodeList
    this.currentIndex = 1;
    // Set initial position
    gsap.set(this.slides, { x: -this.imageWidth * this.currentIndex });
  }

  addEventListeners() {
    this.nextButtons.forEach((button) => {
      button.addEventListener("click", () => this.next());
    });
    this.prevButtons.forEach((button) => {
      button.addEventListener("click", () => this.prev());
    });
    window.addEventListener("resize", () => this.handleResize());

    this.slides.addEventListener("touchstart", (e) => this.handleTouchStart(e));
    this.slides.addEventListener("touchmove", (e) => this.handleTouchMove(e));
    this.slides.addEventListener("touchend", (e) => this.handleTouchEnd(e));
  }

  handleResize() {
    this.images = document.querySelectorAll(".slides .carouselSlide");
    // Recalculate image width
    this.imageWidth = this.images[0].clientWidth;
    // Update the position of slides
    gsap.set(this.slides, { x: -this.imageWidth * this.currentIndex });
  }

  next() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex++;
    this.animateSlide(() => {
      if (this.currentIndex === this.totalImages + 1) {
        // Reset to first real image
        gsap.set(this.slides, { x: -this.imageWidth });
        this.currentIndex = 1;
      }
      this.isAnimating = false;
    });
  }

  prev() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex--;
    this.animateSlide(() => {
      if (this.currentIndex === 0) {
        // Reset to last real image
        gsap.set(this.slides, { x: -this.imageWidth * this.totalImages });
        this.currentIndex = this.totalImages;
      }
      this.isAnimating = false;
    });
  }

  animateSlide(onCompleteCallback) {
    gsap.to(this.slides, {
      x: -this.imageWidth * this.currentIndex,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: onCompleteCallback,
    });
  }

  handleTouchStart(e) {
    this.touchStartX = e.touches[0].clientX;
  }

  handleTouchMove(e) {
    this.touchEndX = e.touches[0].clientX;
  }

  handleTouchEnd(e) {
    const touchDeltaX = this.touchEndX - this.touchStartX;
    if (Math.abs(touchDeltaX) > this.touchThreshold) {
      if (touchDeltaX < 0) {
        this.next();
      } else {
        this.prev();
      }
    }
    // Reset values
    this.touchStartX = 0;
    this.touchEndX = 0;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ImageCarousel();
});
