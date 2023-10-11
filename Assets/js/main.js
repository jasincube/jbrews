// navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.backgroundColor="tranparent";
  } else {
    document.getElementById("navbar").style.top = "-180px";
    document.getElementById("navbar").style.backgroundColor="tranparent";
  }
  prevScrollpos = currentScrollPos;
}

// navbar end


// Event carousel : Kiran
const swiper = new Swiper('.slider-ev', {
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
        spaceBetween:1 ,
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

  
  
  // ans
  
  
  const swiper1 = new Swiper(".swiper-im", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true
    },
    loop: true,
    pagination: {
      el: ".page-dots",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
      1560: {
        slidesPerView: 3
      }
    }
  });
  // image gallery end---
  

  //menu

  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: false
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });

  //end of menu

