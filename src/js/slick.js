// about-restaurant js slaider

// $('.about-restaurant-slaider').slick({
//   infinite: true,
//   slidesToShow: 2,
//   slidesToScroll: 1,
// });
//  ABOUT RESTOURANT SLAIDER DONT TACH!!!!!
$(document).ready(function () {
  $('.restaurant-about-slider').slick({
    arrows: true,
    slidesToShow: 2,
    variableWidth: true,
    appendArrows: $('.restaurant-about__slider-nav'),
    autoplay: true,
  });
});

/* room-page slider */
$('.hero-slider').slick({
  slidesToShow: 1,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  appendArrows: $('.hero-slider'),
  prevArrow: $('.hero-slider__prev'),
  nextArrow: $('.hero-slider__next'),
  zIndex: 1,
});
