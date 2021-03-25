'use strict'

function handleClickMenu() {
    $('body').toggleClass('scroll__hidden');
 }

 $(function() {
     $('#menuicon').click(function() {
         handleClickMenu();
     })
 })