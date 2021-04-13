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
   

        // 엔터키 클릭 모션
        $(".login__id").keyup(function (e) { if (e.keyCode == 13) login(); });

        // 모달창 클릭
    $("#emailreject").on('click', function () {
        $('.modal__background').show();
    });
        // 모달창 닫기
    $("#emailreject__close").on('click', function () {
        $('.modal__background').hide();
    });
            // 모달창 클릭 스크롤막기
            $("#emailreject").on('click', function () {
        $('body').addClass('scroll__hidden');
    });

        // 모달창 닫기 스크롤막기 풀기
    $("#emailreject__close").on('click', function () {
        $('body').removeClass('scroll__hidden');
    });

