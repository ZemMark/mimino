// about-restaurant js slaider

$('.about-restaurant-slaider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
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
