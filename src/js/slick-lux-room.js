// lux-room js slaider

// $('.lux-room-slaider').slick({
//   infinite: true,
//   slidesToShow: 2,
//   slidesToScroll: 1,
// });

$(document).ready(function () {
  $('.lux-room-slider.lux-room').slick({
    arrows: true,
    slidesToShow: 2,
    variableWidth: true,
    appendArrows: $('.lux-room__slider-nav.lux-room'),
    speed: 300,
    prevArrow: '.lux-room-slider__arrow-left.lux-room',
    nextArrow: '.lux-room-slider__arrow-right.lux-room',
  });
});

$(document).ready(function () {
  $('.lux-room-slider.room-3').slick({
    arrows: true,
    slidesToShow: 2,
    variableWidth: true,
    appendArrows: $('.lux-room__slider-nav.room-3'),
    speed: 300,
    prevArrow: '.lux-room-slider__arrow-left.room-3',
    nextArrow: '.lux-room-slider__arrow-right.room-3',
  });
});

$(document).ready(function () {
  $('.lux-room-slider.room-2').slick({
    arrows: true,
    slidesToShow: 2,
    variableWidth: true,
    appendArrows: $('.lux-room__slider-nav.room-2'),
    speed: 300,
    prevArrow: '.lux-room-slider__arrow-left.room-2',
    nextArrow: '.lux-room-slider__arrow-right.room-2',
  });
});