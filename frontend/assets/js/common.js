//page top
$(function() {
    $('#pagetop-block').click(function () {
            $('body, html').animate({scrollTop: 0}, 500);
    });
    new WOW().init();
});


