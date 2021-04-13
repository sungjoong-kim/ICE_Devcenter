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

    /* 파일명 가져오기 start */
    var fileTarget = $('.file__box .file__hidden');

    fileTarget.on('change', function () {
        if (window.FileReader) {
            // 파일명 추출
            var filename = $(this)[0].files[0].name;
        }
        else {
            // Old IE 파일명 추출
            var filename = $(this).val().split('/').pop().split('\\').pop();
        };

        $(this).siblings('.upload__name').val(filename);
    });
	/* 파일명 가져오기 end */


        // 가입 단계나누기
        $("#signup__next").on('click', function () {
            $('#singstep01').hide('');
            $('#singstep02').show('');
        });
    
        // 전체동의하기
        function selectAll(selectAll) {
            const checkboxes
                = document.getElementsByName("signupagree");
    
            checkboxes.forEach((checkbox) => {
                checkbox.checked = selectAll.checked;
            })
    
    
        }

        // faq

        $(document).ready(function () {
            $(".card__header").click(function () {
                // self clicking close
                if ($(this).next(".card__body").hasClass("active")) {
                    $(this).next(".card__body").removeClass("active").slideUp(300)
                    $(this).children("span").removeClass("fa-chevron-down").addClass("fa-chevron-up")
                }
                else {
                    $(".card .card__body").removeClass("active").slideUp(300)
                    $(".card .card__header span").removeClass("fa-chevron-down").addClass("fa-chevron-up");
                    $(this).next(".card__body").addClass("active").slideDown(300)
                    $(this).children("span").removeClass("fa-chevron-up").addClass("fa-chevron-down")
                }
            })
        })
    