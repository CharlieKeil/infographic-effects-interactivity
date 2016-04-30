var $beer3 = $('.beer-3');
var $coffee3 = $('.coffee-3');
var $mug = $('.mug');
var $glass = $('.glass');
var $cup = $('.cup');
var $papcup = $('.paper-cup');
var $beer2 = $('.beer-2');
var $coffee2 = $('.coffee-2');
var $rays = $('.rays');

$beer3.waypoint(function (direction) {
  if (direction == 'down') {
  $beer3.addClass('js-beer-3-animate');
  } else {
    $beer3.removeClass('js-beer-3-animate');
  }
}, { offset: '50%' });

$beer2.waypoint(function (direction) {
  if (direction == 'down') {
  $beer2.addClass('js-beer-2-animate');
  } else {
    $beer2.removeClass('js-beer-2-animate');
  }
}, { offset: '50%' });

$coffee2.waypoint(function (direction) {
  if (direction == 'down') {
  $coffee2.addClass('js-coffee-2-animate');
  } else {
    $coffee2.removeClass('js-coffee-2-animate');
  }
}, { offset: '50%' });

$coffee3.waypoint(function (direction) {
  if (direction == 'down') {
  $coffee3.addClass('js-coffee-3-animate');
  } else {
    $coffee3.removeClass('js-coffee-3-animate');
  }
}, { offset: '50%' });

$rays.waypoint(function (direction) {
  if (direction == 'down') {
  $rays.addClass('js-rays-animate');
  } else {
    $rays.removeClass('js-rays-animate');
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
