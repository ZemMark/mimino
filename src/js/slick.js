// about-restaurant js slaider

// $('.about-restaurant-slaider').slick({
//   infinite: true,
//   slidesToShow: 2,
//   slidesToScroll: 1,
// });

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
