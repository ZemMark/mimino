// about-restaurant js slaider

// $('.about-restaurant-slaider').slick({
//   infinite: true,
//   slidesToShow: 2,
//   slidesToScroll: 1,
// });

$(document).ready(function () {
  $('.about-restaurant-slider').slick({
    arrows: true,
    slidesToShow: 2,
    variableWidth: true,
    appendArrows: $('.about-restaurant__slider-nav'),
    speed: 300,
    autoplay: true,
  });
});

// details-restaurant js slaider

$('.restdet__slaider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
  // prevArrow: $(".restdet__prev"),
  // nextArrow: $(".restdet__next")
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
