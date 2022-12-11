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
    appendArrows: $('.lux-room__slider-nav'),
    speed: 300,
    autoplay: true,
  });
});