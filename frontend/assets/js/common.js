//page top
$(function() {
    $('#pagetop-block').click(function () {
        console.log("hogehoge")
            $('body, html').animate({scrollTop: 0}, 500);
    });
});
