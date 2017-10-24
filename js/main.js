$(document).ready(function () {
    var mainBlock = $(".main-block");
    var contetnBlock = $(".content");
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    const HEADER_HEIGHT = 75;

    function liFixHeight() {
        vw = window.innerWidth;
        if ($(document).scrollTop() > 50) {
            if (vw > 767) {
                $('#responsive-top-menu ul li').css("height", 75 + "px");
            }
            else {
                $('#responsive-top-menu ul li').css("height", "auto");
            }
        }
        else {
            if (vw > 767) {
                $('#responsive-top-menu ul li').css("height", 100 + "px");
            }
            else {
                $('#responsive-top-menu ul li').css("height", "auto");
            }
        }
    }

    function bodyFixHeight() {
        mainBlock.css("height", (vh) - 75 + "px");
        contetnBlock.css("top", $(window).height() - 75 + "px");
        if (vw > 970) {
            $("section").css("min-height", ($(window).height()) - 75 + "px")
        };
    }
    bodyFixHeight();
    $(window).resize(function () {
        vw = window.innerWidth
            , vh = window.innerHeight;
        mainBlock.css("min-height", vh - 75 + "px");
        bodyFixHeight();
        liFixHeight()
    });
    $(document).on('click', '#MainNavigation li', function () {
        var scrollTo = $(this).data('scrollto');
        var el = $('.' + scrollTo);
        if (scrollTo == 'main-block') {
            $("html,body").animate({
                scrollTop: 0
            }, 1000);
        }
        else {
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
    $(window).scroll(function () {
        liFixHeight()
        if ($(document).scrollTop() > 50) {
            $('.top-navigation-box').addClass('top-navigation-box-collapse');
            $('#big-logo').css("display", "none");
            $('#small-logo').css("display", "block");
        }
        else {
            $('.top-navigation-box').removeClass('top-navigation-box-collapse');
            $('#big-logo').css("display", "block");
            $('#small-logo').css("display", "none");
        }
    })
});