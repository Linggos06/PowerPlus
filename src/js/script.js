const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    speed: 950,
 
    freeMode: {
     enabled: true,
     sticky: true,
   },
    
    breakpoints: {
       // when window width is >= 320px
       320: {
         slidesPerView: 1.3,
         spaceBetween: 40
       },
       // when window width is >= 605px
       605: {
         slidesPerView: 2.3,
         spaceBetween: 20
       },
       // when window width is >= 993px
       993: {
         slidesPerView: 4,
         spaceBetween: 20
       }
     },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 
  
  });