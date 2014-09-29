/*global skrollr:false */


'use strict';
(function() {
  skrollr.init({forceHeight: false});
  var nav = document.querySelector('nav');
  var hamb = document.querySelector('.hamb');
  hamb.addEventListener('click', function() {
    console.log('Hello');
    nav.classList.toggle('is-shown');
  });
})();
