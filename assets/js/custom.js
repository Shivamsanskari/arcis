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

// Mega Menu CSS

$(document).on('click','.backtoparent', function(){
  $(this).parent().parent('li').removeClass('opened');
});
$(document).on('click','.lefttabs ul li a', function(){
  $(this).addClass('active').parent('li').siblings().find('a').removeClass('active');
  var callbox = $(this).data('id')+'box';
  $('.'+callbox).removeClass('d-none').siblings().addClass('d-none');
});
$(document).on('click','.openmenu', function(){ 
  if($('.openindustry').hasClass('activelink') || $('.openservices').hasClass('activelink')){
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
  $('.link-services,.link-industry,.searchwraper').removeClass('opened');
  $('.mainlinks').find('li').removeClass('active');
  $('.openindustry,.openservices').removeClass('activelink');
});

$(document).on('click','.opensearch', function(){
  $('.searchwraper').addClass('opened');
});
$(document).on('click','.closesearchmenu', function(){
  $('.searchwraper').removeClass('opened');
});
$(document).on('click','.openservices', function(){
  $(this).toggleClass('activelink').parent().toggleClass('active').siblings().removeClass('active');
  if($('.openmenu').hasClass('opened')){ 
    if ($(window).scrollTop() < 200) {
      $('header').addClass('sticky');
    } else {
      $('header').addClass('sticky');
    }  
  } else{  
    if($('.openindustry').hasClass('activelink')){
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
  $('.link-services').toggleClass('opened');
  $('.mainmegamenu, .link-industry, .openmenu,.searchwraper').removeClass('opened');
  $('.openindustry').removeClass('activelink');
  // $('.whoweservemenu').addClass('d-none');
  // $('.whatweoffermenu').removeClass('d-none');
});
$(document).on('click','.openindustry', function(){
  $(this).toggleClass('activelink').parent().toggleClass('active').siblings().removeClass('active');
  if($('.openmenu').hasClass('opened')){ 
    if ($(window).scrollTop() < 200) {
      $('header').addClass('sticky');
    } else {
      $('header').addClass('sticky');
    }  
  } else{  
    if($('.openservices').hasClass('activelink')){
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
  $('.link-industry').toggleClass('opened');
  $('.mainmegamenu, .link-services, .openmenu,.searchwraper').removeClass('opened');
  $('.openservices').removeClass('activelink');
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
  $('.link-services,.link-industry').removeClass('opened');
  $('.openservices,.openindustry').removeClass('activelink');
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

$(".scrollpart").mCustomScrollbar({
  scrollButtons:{enable:true},
  theme:"light-thick",
  scrollInertia: 200,
  scrollbarPosition:"outside"
});