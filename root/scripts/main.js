$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $("nav").css("background", "black");
            $("nav").addClass("shadow");
        } else {
            $("nav").css("background", "transparent");
            $("nav").removeClass("shadow");
        }
    })







}); //Main function