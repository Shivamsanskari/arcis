$(function() { 
  $('.partnerslider').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    mouseDrag: false,
    navText: ['<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M299.634 6519.292a1.063 1.063 0 0 0-1.464 0l-8.563 8.264a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413" transform="translate(-289 -6519)"/></svg>','<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413" transform="translate(-249 -6519)"/></svg>'],
    // stagePadding: 150,
    responsive:{
      0:{
          nav:false,
          items:1.3
      },
      600:{
          nav:true,
          items:2.5
      },
        1000:{
        nav:true,
          items:3.6
      }
    }
  });
  $('.l-slider').owlCarousel({
    loop:true,
    margin:30,
    dots:false,
    mouseDrag: false,
    autoHeight: true,
    navText: ['<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M299.634 6519.292a1.063 1.063 0 0 0-1.464 0l-8.563 8.264a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413" transform="translate(-289 -6519)"/></svg>','<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413" transform="translate(-249 -6519)"/></svg>'],
    // stagePadding: 150,
    responsive:{
      0:{
          nav:true,
          items:1.3
      },
        1000:{
        nav:true,
          items:1.4
      }
    }
  });
  $('.culture-slider').owlCarousel({
    loop:true,
    margin:30,
    dots:false,
    mouseDrag: false,
    navText: ['<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M299.634 6519.292a1.063 1.063 0 0 0-1.464 0l-8.563 8.264a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413" transform="translate(-289 -6519)"/></svg>','<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413" transform="translate(-249 -6519)"/></svg>'],
    // stagePadding: 150,
    responsive:{
      0:{
          nav:true,
          items:1.4
      },
      600:{
          nav:true,
          items:2
      },
        1000:{
        nav:true,
          items:3
      }
    }
  });
  $('.industryslider').owlCarousel({
    loop:false,
    margin:0,
    dots:false,
    mouseDrag: false,
    navText: ['<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M299.634 6519.292a1.063 1.063 0 0 0-1.464 0l-8.563 8.264a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413" transform="translate(-289 -6519)"/></svg>','<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413" transform="translate(-249 -6519)"/></svg>'],
    // stagePadding: 150,
    responsive:{
      0:{
          nav:false,
          items:1.3
      },
      600:{
          nav:true,
          items:2.5
      },
        1000:{
        nav:true,
          items:3.6
      }
    }
  });
  
  $('.rs-companypage').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    nav:true,
    navText: ['<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M299.634 6519.292a1.063 1.063 0 0 0-1.464 0l-8.563 8.264a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413" transform="translate(-289 -6519)"/></svg>','<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413" transform="translate(-249 -6519)"/></svg>'],
    // stagePadding: 150,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2.5
      },
        1000:{
          items:3.6
      }
    }
  });
  $('.testiHome-slider').owlCarousel({
    loop:false,
    margin:20,
    dots:false,
    nav:true,
    navText: ['<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M299.634 6519.292a1.063 1.063 0 0 0-1.464 0l-8.563 8.264a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413" transform="translate(-289 -6519)"/></svg>','<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413" transform="translate(-249 -6519)"/></svg>'],
    // stagePadding: 150,
    responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
        1000:{
          items:4
      }
    }
  });
  $('.miniservices-slider').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    navText: ['<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M299.634 6519.292a1.063 1.063 0 0 0-1.464 0l-8.563 8.264a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413" transform="translate(-289 -6519)"/></svg>','<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413" transform="translate(-249 -6519)"/></svg>'],
    // stagePadding: 150,
    responsive:{
      0:{
        items:2
      },
      600:{
        items:3
      },
      1000:{
        items:4
      },
      1440:{
        items:5
      }
    }
  });
  $('.memberslider').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    autoplay:false,
    lazyLoad: false,
    navText: ['<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M299.634 6519.292a1.063 1.063 0 0 0-1.464 0l-8.563 8.264a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413" transform="translate(-289 -6519)"/></svg>','<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413" transform="translate(-249 -6519)"/></svg>'],
    // stagePadding: 150,
    responsive:{
      0:{
        nav:false,
        items:1.3
      },
      600:{
        nav:true,
        items:2.5
      },
      1000:{
        nav:true,
        items:2.6
      },
      1440:{
        nav:true,
        items:3.5
      }
    }
  });
  $('#sync3').owlCarousel({
    loop:false,
    margin:0,
    dots:true,
    nav:true,
    smartSpeed: 500,
    slideSpeed: 500,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    items:1
  });
  $('.homepagecarousel').carousel({
    pause: "false"
  });
  $(".scrollpart").mCustomScrollbar({
    scrollButtons:{enable:true},
    theme:"light-thick",
    scrollInertia: 200,
    scrollbarPosition:"outside"
  });
  $(".scrollpara").mCustomScrollbar({
    scrollButtons:{enable:true},
    theme:"light-thick",
    scrollInertia: 200,
    alwaysShowScrollbar:1,
    scrollbarPosition:"outside"
  });
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var syncedSecondary = true;
  sync1.owlCarousel({
    items: 1,
    nav: false,
    autoplay: false, 
    dots: false,
    loop: false,
    smartSpeed: 300,
    slideSpeed: 1000,
    mouseDrag: false,
    touchDrag: false,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>']
  })

  sync2.on('initialized.owl.carousel', function() {
    sync2.find(".owl-item").eq(0).addClass("current");
  }).owlCarousel({
    items: 1,
    dots: true,
    nav: true,
    smartSpeed: 300,
    slideSpeed: 1000,
    mouseDrag: false,
    touchDrag: false,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>']
  }).on('changed.owl.carousel', syncPosition2);
  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 300, true);
    }
  }
  AOS.init();
});
$(document).on('click','.backtoparent', function(){
  $(this).parent().parent('li').removeClass('opened');
});
$(document).on('click','.lefttabs ul li a', function(){
  $(this).addClass('active').parent('li').siblings().find('a').removeClass('active');
  var callbox = $(this).data('id')+'box';
  $('.'+callbox).removeClass('d-none').siblings().addClass('d-none');
});
$(document).on('click','.openmenu', function(){ 
  if($('.openwhoweserve').hasClass('activelink') || $('.openwhatweoffer').hasClass('activelink')){
    if ($(window).scrollTop() < 200) {
      $('header').addClass('sticky');
    } else {
      $('header').addClass('sticky');
    }
  } else{
    if ($(window).scrollTop() < 200) {
      $('header').toggleClass('sticky');
    } else {
      $('header').addClass('sticky');
    }
    $('body').toggleClass('hiddenoverflow');
  }
  $('.mainmegamenu').toggleClass('opened');
  $(this).toggleClass('opened');
  $('.linkmegamenu,.linkmegamenusearve,.searchwraper').removeClass('opened');
  $('.mainlinks').find('li').removeClass('active');
  $('.openwhoweserve,.openwhatweoffer').removeClass('activelink');
  // $('body').addClass('hiddenoverflow');  
  // $('header').addClass('sticky');
});
// $(document).on('click','.openmenu.opened', function(){
//   $('.mainmegamenu').removeClass('opened');
//   $(this).removeClass('opened');
//   $('body').removeClass('hiddenoverflow'); 
//   if ($(window).scrollTop() > 200) {
//     $('header').addClass('sticky');
//   } else {
//     $('header').removeClass('sticky');
//   }
// });
$(document).on('click','.opensearch', function(){
  $('.searchwraper').addClass('opened');
});
$(document).on('click','.closesearchmenu', function(){
  $('.searchwraper').removeClass('opened');
});
$(document).on('click','.openwhatweoffer', function(){
  $(this).toggleClass('activelink').parent().toggleClass('active').siblings().removeClass('active');
  if($('.openmenu').hasClass('opened')){ 
    if ($(window).scrollTop() < 200) {
      $('header').addClass('sticky');
    } else {
      $('header').addClass('sticky');
    }  
  } else{  
    if($('.openwhoweserve').hasClass('activelink')){
      if ($(window).scrollTop() < 200) {
        $('header').addClass('sticky');
      } else {
        $('header').addClass('sticky');
      }
    } else{
      if ($(window).scrollTop() < 200) {
        $('header').toggleClass('sticky');
      } else {
        $('header').addClass('sticky');
      }
      $('body').toggleClass('hiddenoverflow');
    }
  }
  $('.linkmegamenu').toggleClass('opened');
  $('.mainmegamenu, .linkmegamenusearve, .openmenu,.searchwraper').removeClass('opened');
  $('.openwhoweserve').removeClass('activelink');
  // $('.whoweservemenu').addClass('d-none');
  // $('.whatweoffermenu').removeClass('d-none');
});
$(document).on('click','.openwhoweserve', function(){
  $(this).toggleClass('activelink').parent().toggleClass('active').siblings().removeClass('active');
  if($('.openmenu').hasClass('opened')){ 
    if ($(window).scrollTop() < 200) {
      $('header').addClass('sticky');
    } else {
      $('header').addClass('sticky');
    }  
  } else{  
    if($('.openwhatweoffer').hasClass('activelink')){
      if ($(window).scrollTop() < 200) {
        $('header').addClass('sticky');
      } else {
        $('header').addClass('sticky');
      }
    } else{
      if ($(window).scrollTop() < 200) {
        $('header').toggleClass('sticky');
      } else {
        $('header').addClass('sticky');
      }
      $('body').toggleClass('hiddenoverflow');
    }

  }
  $('.linkmegamenusearve').toggleClass('opened');
  $('.mainmegamenu, .linkmegamenu, .openmenu,.searchwraper').removeClass('opened');
  $('.openwhatweoffer').removeClass('activelink');
  // $('.whoweservemenu').removeClass('d-none');
  // $('.whatweoffermenu').addClass('d-none');
});

$(document).on('click','.closelinkmenu', function(){
  if ($(window).scrollTop() > 200) {
    $('header').addClass('sticky');
  } else {
    $('header').removeClass('sticky');
  }
  $('.mainlinks').find('li').removeClass('active');
  $('body').removeClass('hiddenoverflow');
  $('.linkmegamenu,.linkmegamenusearve').removeClass('opened');
  $('.openwhatweoffer,.openwhoweserve').removeClass('activelink');
});

$(document).on('click','#backtotop', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
$(document).on('click','#getintouchref', function(e){
  var formtopoffset = $('#getinouch').offset();
  e.preventDefault();
  $('html, body').animate(formtopoffset, '300');
});
$(document).on('click','.mainmenuwraper ul li span', function(){
  $(this).parent('li').toggleClass('opened').siblings().removeClass('opened');
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

function callServices(callelem,elem){
  var callclass = '.callservices'+callelem;
  $(elem).toggleClass('opened').parent().siblings().find('button').removeClass('opened');
  $(callclass).slideToggle().siblings().slideUp();
}
$(document).on('click','.closcalloutbox', function(){
  $('.callofferingbtn').removeClass('opened');
  $('.openbox').slideUp();
});
$(document).on('click','.callhiddencontent',function(){
  $(this).parent().toggleClass('opened').next('ul').slideToggle();
});
$(document).on('click','.withhovereffect h2',function(){
  $(this).parent().toggleClass('opened').parent().siblings('li').find('.withhovereffect').removeClass('opened');
});
$(document).on('click','.showmorecontent',function(){
  $(this).hide();
  $('.morecontent').slideDown();
});


//========================Swiper Js Slider coding ==========================//

const dttabingslider = document.querySelectorAll(".dt-slider");
for (const section of dttabingslider) {
  const swiper = section.querySelector(".swiper");
  new Swiper(swiper, {
    loop: false,
    lazyLoading: true,
    navigation: {
      prevEl: section.querySelector(".carousel-control-left"),
      nextEl: section.querySelector(".carousel-control-right")
    },
    breakpoints: {
      0: {spaceBetween: 10,
        slidesPerView: 1.5
      },
      767: {spaceBetween: 20,
        slidesPerView: 2.5
      },
      992: {spaceBetween: 30,
        slidesPerView: 3.6
      }
    }
  });
}
const teamleadslider = document.querySelectorAll(".member-slider");
for (const section of teamleadslider) {
  const swiper = section.querySelector(".swiper");
  new Swiper(swiper, {
    loop: false,
    lazyLoading: true,
    navigation: {
      prevEl: section.querySelector(".carousel-control-left"),
      nextEl: section.querySelector(".carousel-control-right")
    },
    breakpoints: {
      0: {spaceBetween: 10,
        slidesPerView: 1.3
      },
      567: {spaceBetween: 15,
        slidesPerView: 2.5
      },
      992: {spaceBetween: 20,
        slidesPerView: 3.5
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
const brandslider = document.querySelectorAll(".brand-slider");
for (const section of brandslider) {
  const swiper = section.querySelector(".swiper");
  new Swiper(swiper, {
    loop: true,
    lazyLoading: true,
    autoplay: {
      delay: 1000,
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
      992: {spaceBetween: 40,
        slidesPerView: 5
      }
    }
  });
}
const teslider = document.querySelectorAll(".team-expert-slider");
for (const section of teslider) {
  const swiper = section.querySelector(".swiper");
  new Swiper(swiper, {
    loop: false,
    lazyLoading: true,
    navigation: {
      prevEl: section.querySelector(".carousel-control-left"),
      nextEl: section.querySelector(".carousel-control-right")
    },
    breakpoints: {
      0: {spaceBetween: 10,
        slidesPerView: 1.5
      },
      567: {spaceBetween: 20,
        slidesPerView: 2.7
      },
      992: {spaceBetween: 30,
        slidesPerView: 3.7
      },
      1441: {spaceBetween: 30,
        slidesPerView: 4.5
      }
    }
  });
}
const offerdslider = document.querySelectorAll(".service-offerd-slider");
for (const section of offerdslider) {
  const swiper = section.querySelector(".swiper");
  new Swiper(swiper, {
    loop: false,    
    // centeredSlides: true,
    lazyLoading: true,
    navigation: {
      prevEl: section.querySelector(".carousel-control-left"),
      nextEl: section.querySelector(".carousel-control-right")
    },
    breakpoints: {
      0: {spaceBetween: 10,
        slidesPerView: 1.4
      },
      567: {spaceBetween: 20,
        slidesPerView: 2.7
      },
      992: {spaceBetween: 30,
        slidesPerView: 3.7
      }
    }
  });
}

function hamtoggle(x) {
  x.classList.toggle("change");
}

