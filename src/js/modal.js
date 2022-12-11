$('.js-open-modal').click(function () {
  var modalName = $(this).attr('data-modal');
  // console.log(modalName);
  var modal = $('.js-modal[data-modal="' + modalName + '"]');
  // console.log(modal);
  modal.addClass('is-shown');
  $('.js-modal-overlay').addClass('is-shown');
});

$('.js-modal-close').click(function () {
  $(this).parent('.js-modal').removeClass('is-shown');
  $('.js-modal-overlay').removeClass('is-shown');
});

$('.js-modal-overlay').click(function () {
  $('.js-modal.is-shown').removeClass('is-shown');
  $(this).removeClass('is-shown');
});
