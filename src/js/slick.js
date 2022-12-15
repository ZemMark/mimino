$(document).ready(function () {
  $('.hotel-about-slider').slick({
    arrows: true,
    slidesToShow: 2,
    variableWidth: true,
    appendArrows: $('.hotel-about__slider-nav'),
    speed: 300,
    autoplay: true,
  });
});
$(document).ready(function () {
  $('.restaurant-about-slider').slick({
    arrows: true,
    slidesToShow: 2,
    variableWidth: true,
    appendArrows: $('.restaurant-about__slider-nav'),
    speed: 300,
    autoplay: true,
  });
});

// details-restaurant js slaider

$('.restdet-slaider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
  prevArrow: $('.restdet-slaider__arrow-left'),
  nextArrow: $('.restdet-slaider__arrow-right'),
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

/* details-hotel slider */
$('.details-hotel-slaider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
  prevArrow: $('.details-hotel-slaider__arrow-left'),
  nextArrow: $('.details-hotel-slaider__arrow-right'),
});

$(document).ready(function () {
  $('.kitchen-about-slider').slick({
    arrows: true,
    slidesToShow: 2,
    variableWidth: true,
    appendArrows: $('.kitchen-about__slider-nav'),
    speed: 300,
    autoplay: true,
  });
});
