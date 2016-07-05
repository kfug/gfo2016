//page top
$(function() {
    $('#pagetop-block').click(function () {
            $('body, html').animate({scrollTop: 0}, 500);
    });

    $("#staff-container .staff").on("click",(e)=>{
        console.log("hogehgeo")
        e.preventDefault();
        var $this = $(e.currentTarget);
        var url = $this.find("a").attr("href");
        window.open().location.href = url;
    })

    new WOW().init();
});


