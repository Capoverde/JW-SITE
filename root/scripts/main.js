$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $("nav").css("background", "black");
            $("nav").addClass("box-shadow", "");
        } else {
            $("nav").css("background", "transparent");
        }
    })







}); //Main function