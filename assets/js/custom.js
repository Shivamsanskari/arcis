$(function() { 
  AOS.init();
});


$(document).on('click','#backtotop', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(window).bind('scroll load', function() {
  if ($(window).scrollTop() > 50) {
    $('header').addClass('sticky');
  } else {
    $('header').removeClass('sticky');
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    $('#backtotop').addClass('show');
  } else {
    $('#backtotop').removeClass('show');
  }
});

//========================Swiper Js Slider coding ==========================//

const brandslider = document.querySelectorAll(".brand-slider");
for (const section of brandslider) {
  const swiper = section.querySelector(".swiper");
  new Swiper(swiper, {
    loop: true,
    lazyLoading: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
      prevEl: section.querySelector(".carousel-control-left"),
      nextEl: section.querySelector(".carousel-control-right")
    },
    breakpoints: {
      0: {spaceBetween: 15,
        slidesPerView: 2
      },
      567: {spaceBetween: 30,
        slidesPerView: 3
      },
      992: {spaceBetween: 0,
        slidesPerView: 5
      }
    }
  });
}
const relslider = document.querySelectorAll(".testi-slider");
for (const section of relslider) {
  const swiper = section.querySelector(".swiper");
  new Swiper(swiper, {
    loop: false,
    lazyLoading: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
      prevEl: section.querySelector(".carousel-control-left"),
      nextEl: section.querySelector(".carousel-control-right")
    },
    breakpoints: {
      0: {spaceBetween: 15,
        slidesPerView: 1
      },
      567: {spaceBetween: 30,
        slidesPerView: 2
      },
      992: {spaceBetween: 40,
        slidesPerView: 3
      }
    }
  });
}