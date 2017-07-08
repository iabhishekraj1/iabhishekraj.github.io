$(document).ready(function () {
    new WOW().init();
    $("#txt_menu").click(function () {
        $("#menu").slideToggle();
        $(window).off('scroll');
    });
    $("#menu a").click(function () {
        $(this).parents("#menu").slideUp();
    })
    $("#menu a").click(function () {
        $("body,html").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    })
})