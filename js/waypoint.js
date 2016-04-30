var $beer3 = $('.beer-3');
var $coffee3 = $('.coffee-3');
var $mug = $('.mug');
var $glass = $('.glass');
var $cup = $('.cup');
var $papcup = $('.paper-cup');

$beer3.waypoint(function (direction) {
  if (direction == 'down') {
  $beer3.addClass('js-beer-3-animate');
  } else {
    $beer3.removeClass('js-beer-3-animate');
  }
}, { offset: '50%' });

$coffee3.waypoint(function (direction) {
  if (direction == 'down') {
  $coffee3.addClass('js-coffee-3-animate');
  } else {
    $coffee3.removeClass('js-coffee-3-animate');
  }
}, { offset: '50%' });

$mug.waypoint(function (direction) {
  if (direction == 'down') {
  $mug.addClass('js-mug-animate');
  } else {
    $mug.removeClass('js-mug-animate');
  }
}, { offset: '50%' });

$glass.waypoint(function (direction) {
  if (direction == 'down') {
  $glass.addClass('js-glass-animate');
  } else {
    $glass.removeClass('js-glass-animate');
  }
}, { offset: '50%' });

$cup.waypoint(function (direction) {
  if (direction == 'down') {
  $cup.addClass('js-cup-animate');
  } else {
    $cup.removeClass('js-cup-animate');
  }
}, { offset: '50%' });

$papcup.waypoint(function (direction) {
  if (direction == 'down') {
  $papcup.addClass('js-papcup-animate');
  } else {
    $papcup.removeClass('js-papcup-animate');
  }
}, { offset: '50%' });
