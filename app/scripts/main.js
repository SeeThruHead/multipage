'use strict';
$(function(){
  $('.hamb').click(function() {
    $('nav').toggleClass('is-shown');
  });
  var s = skrollr.init();
});