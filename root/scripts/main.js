$(function () {
    // adds class to navbar on scroll
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $("nav").css("background", "black");
            $("nav").addClass("shadow");
        } else {
            $("nav").css("background", "transparent");
            $("nav").removeClass("shadow");
        }
    });
    // smooth scrol to sections
    $('nav li:nth-child(1)').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.sec-1').offset().top - 40
        }, 1000);
    });
    $('nav li:nth-child(2)').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.sec-2').offset().top - 40
        }, 1000);
    });
    $('nav li:nth-child(3)').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.sec-3').offset().top - 40
        }, 1000);
    });
    $('nav li:nth-child(4)').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.sec-4').offset().top - 40
        }, 1000);
    });
    $('nav li:nth-child(5)').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.break').offset().top - 40
        }, 1000);
    });
    $('nav li:nth-child(6)').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.sec-6').offset().top - 40
        }, 1000);
    });
    // TOP button toggle on scroll
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 750) {
            $('#TOP').addClass('visible')
        } else {
            $('#TOP').removeClass('visible')
        }
    });
    $('#TOP').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })



}); //Main function