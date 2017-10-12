$(document).ready(function () {
    function bodyFixHeight() {
        $("#header").css("height", ($(window).height()) - 100 + "px");
                $("section").css("min-height", ($(window).height()) - 100 + "px");
    };
    bodyFixHeight();
    $(window).resize(function () {
        var vw = $(window).width()
            , vh = $(window).height();
        $("#header").css("min-height", vh - 100 + "px");
        bodyFixHeight();
    });
    $("a.toSection1").click(function () {
        $("html,body").animate({
            scrollTop: $(".section1").offset().top - 100
        }, 1000);
        return false;
    });
    $("a.toSection2").click(function () {
        $("html,body").animate({
            scrollTop: $(".section2").offset().top - 100
        }, 1000);
        return false;
    });
    $("a.toSection3").click(function () {
        $("html,body").animate({
            scrollTop: $(".section3").offset().top - 100
        }, 1000);
        return false;
    });
    $("a.toSection4").click(function () {
        $("html,body").animate({
            scrollTop: $(".section4").offset().top - 100
        }, 1000);
        return false;
    });
    $("a.toSection5").click(function () {
        $("html,body").animate({
            scrollTop: $(".section5").offset().top - 100
        }, 1000);
        return false;
    });
    $("a.toSection6").click(function () {
        $("html,body").animate({
            scrollTop: $(".section6").offset().top - 100
        }, 1000);
        return false;
    });

    function up() {
        var section2Top = ($(".section1").offset().top) / 3;
        if ($(document).scrollTop() >= section2Top) {
            $(".upBtn").css("display", "block")
        }
        else if ($(document).scrollTop() < section2Top) {
            $(".upBtn").css("display", "none")
        }
    };
    $(document).scroll(function () {
        up();
    })
    $(".upBtn").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});