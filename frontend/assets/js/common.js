//page top
$(function() {
    $('#pagetop-block').click(function () {
            $('body, html').animate({scrollTop: 0}, 500);
    });

    $('.sns-tw-btn').click(function () {
        $(".twitter-share-button a").click();
    });


});




//Facebook
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

