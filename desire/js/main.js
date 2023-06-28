const swiper = new Swiper('.swiper', {
   loop: true,
   autoplay: {
     // delay: 1000,
   },
   effect: 'fade',
   fadeEffect: {
       crossFade: true
   },
  
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-prev',
   },
 
 });

