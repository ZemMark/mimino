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
  prevArrow: $(".restdet-slaider__arrow-left"),
  nextArrow: $(".restdet-slaider__arrow-right")
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
$(document).ready(function () {
  $('.details-hotel__slaider').slick({
    arrows: true,
    slidesToShow: 2,
    variableWidth: true,
    appendArrows: $('.details-hotel-slider__btn'),
  //   prevArrow: $('.details-hotel-slider__arrow-right'),
  // nextArrow: $('.details-hotel-slider__arrow-left'),
    speed: 300,
    autoplay: true,
  });
});
