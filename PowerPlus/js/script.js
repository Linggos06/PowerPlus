"use strict";

var swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  grabCursor: true,
  speed: 950,
  freeMode: {
    enabled: true,
    sticky: true
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
    400: {
      slidesPerView: 1.7,
      spaceBetween: 20
    },
    500: {
      slidesPerView: 2.1,
      spaceBetween: 20
    },
    620: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    // when window width is >= 605px
    768: {
      slidesPerView: 3.2,
      spaceBetween: 20
    },
    995: {
      slidesPerView: 3.4,
      spaceBetween: 20
    },
    // when window width is >= 1070px
    1070: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var date = document.querySelector(".date");
date.textContent = new Date().getFullYear();