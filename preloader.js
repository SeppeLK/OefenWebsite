$(window).on("load", function () {
    $(".preloading").remove();
});

var headerHeight = 200;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() < headerHeight) {
        $('#myNav').removeClass('navbar-top').addClass('navbar-fixed-top');
    } else {
        $('#myNav').removeClass('navbar-fixed-top').addClass('navbar-top');
    }
});