'use strict'

function handleClickMenu() {
    $('body').toggleClass('scroll__hidden');
}

$(function () {
    $('#menuicon').on('click scroll touchmove', function () {
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


// 메일인증모달팝업

// // 메일인증모달팝업 닫기
// $("#popup__close").on('click', function () {
//     $('.modal__background__popup').hide();
// });

// 메일인증팝업 닫기->index.html 이동
$("#popup__close").on('click', function changeView() {
    window.location.href = "index.html";
});

// 메일인증팝업 알람창 성공or실패
$("#popup__finish__close").on('click', function () {
    // $('#error__modal').show()
    var email = $('#confirmemail__input').val();
    if (!email) {
        $('#error__modal').show();
        return;
    }
    $('#join__modal').show()
});


// 메일주소확인 알람창 닫기
$("#popup__finish__end").on('click', function () {
    $('#error__modal').hide();
});

// 인증받기 버튼 다음
$("#popup__next").on('click', function () {
    $('#popup__next').hide();
});

$("#popup__next").on('click', function () {
    $('.popup__finish').show();
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


// // 가입 단계나누기
// $("#signup__next").on('click', function () {
//     $('#singstep01').hide('');
//     $('#singstep02').show('');
// });

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


// 헤더 로그인 박스 클릭
$("#if__btn").on('click', function () {
    $('.memberinformation__group').toggle();
});


// 모달창 클릭 + 스크롤막기 - 회원탈퇴

$("#member__leave").on('click', function () {
    $('#leave__modal').show();
});

$("#member__leave").on('click', function () {
    $('body').addClass('scroll__hidden');
});


//탈퇴하기 닫기 + 스크로풀기 - 회원탈퇴
$("#leave__popup__close").on('click', function () {
    $('#leave__modal').hide();
});


$("#leave__popup__close").on('click', function () {
    $('body').removeClass('scroll__hidden');
});





// 이메일인증모달작동

$("#personalinformation__email__confirm").on('click', function () {
    $('#personalinformation__emailcodeconfirm').show();
});



// 모달창 클릭 스크롤막기 -이메일인증모달
$("#personalinformation__email__confirm").on('click', function () {
    $('body').addClass('scroll__hidden');
});

// 모달창 닫기 스크롤막기 풀기 -이메일인증모달


$("#personalinformation__emailconfirm__close").on('click', function () {
    $('#personalinformation__emailcodeconfirm').hide();
});

$("#personalinformation__emailconfirm__close").on('click', function () {
    $('body').removeClass('scroll__hidden');
});

$("#popup__finish__join__end").on('click', function () {
    $('#personalinformation__emailcodeconfirm').hide();
});

$("#popup__finish__join__end").on('click', function () {
    $('body').removeClass('scroll__hidden');
});

$("#popup__finish__join__end").on('click', function () {
    $('#leave__modal').hide();
});



