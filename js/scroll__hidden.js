'use strict'

function handleClickMenu() {
    $('body').toggleClass('scroll__hidden');
 }

 $(function() {
      $('#menuicon').on('click scroll touchmove', function() {
         handleClickMenu();
     })
 })

 document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
         event.preventDefault(); 
       } 
   }, false);

var lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
         event.preventDefault(); 
       } lastTouchEnd = now; 
   }, false);
   

