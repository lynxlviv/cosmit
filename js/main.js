$(document).ready(function () {

    var mainBlock = $(".main-block");
    var vh = window.innerHeight;
    const HEADER_HEIGHT = 75;

    function bodyFixHeight() {

        mainBlock.css("height", (vh) - 75 + "px");

        if( vh < 970){
            $("section").css("min-height", ($(window).height()) - 75 + "px")
        };
    }

    bodyFixHeight();

    $(window).resize(function () {
            vw = window.innerWidth,
            vh = window.innerHeight;

        mainBlock.css("min-height", vh - 75 + "px");

        bodyFixHeight();
    });


    $(document).on('click', '#MainNavigation li', function () {

        var scrollTo = $(this).data('scrollto');
        var el = $('.' + scrollTo);

        if(scrollTo == 'main-block') {
            $("html,body").animate({
                scrollTop: 0
            }, 1000);
        } else {
            $("html,body").animate({
                scrollTop: el.offset().top - 75
            }, 1000);
        }
    });

    function animateBody(size) {
        $("html,body").animate({
            scrollTop: size
        }, 1000);
    }
    //

});