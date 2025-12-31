document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector(".media-swiper")) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".media-swiper").forEach(el => {
    new Swiper(el, {
      loop: true,
      speed: prefersReducedMotion ? 0 : 500,
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
        el: el.querySelector(".swiper-pagination"),
        clickable: true
      },
      navigation: {
        nextEl: el.querySelector(".swiper-button-next"),
        prevEl: el.querySelector(".swiper-button-prev")
      }
    });
  });
});