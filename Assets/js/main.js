// Event carousel : Kiran
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween:20,
    parallax: true,
  
    breakpoints: {
      // when window width is >= 1200px
      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  
    // If we need pagination    
  pagination: {
  el: '.swiper-pagination',
  type: 'bullets',
  clickable: true
  },
   
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
// end of event