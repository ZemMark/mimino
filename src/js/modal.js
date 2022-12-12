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

const name = document.getElementById('nights');
const price = document.getElementById('price');
const form = document.getElementById('form');
const error = document.getElementById('error');

// form.addEventListener('submit', e => {
//   let Number = nights.value;
//   return Number;
// });
// console.log(alert(number));
