var brain = $('.brain');
var letter = $('.letter');
var brush = $('.brush');
var bigbrain = $('.bigbrain');
var shakebrain = $('.brain2');

$('.brain').on('click', function (e) {
  $(this).toggleClass('is-clicked');
});

$('.letter').on('click', function (e) {
  $(this).toggleClass('is-letter');
});

$('.brush').on('click', function (e) {
  $(this).toggleClass('is-brush');
});

$('.bigbrain').on('click', function (e) {
  $(this).toggleClass('is-big');
});

$('.brain2').on('click', function (e) {
  $(this).toggleClass('is-big');
});
