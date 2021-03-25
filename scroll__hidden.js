'use strict'

function handleClickMenu() {
    $('body').toggleClass('scroll__hidden');
 }

 $(function() {
      $('#menuicon').on('click scroll touchmove', function() {
         handleClickMenu();
     })
 })
