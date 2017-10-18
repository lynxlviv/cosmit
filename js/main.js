$(document).ready(function () {
    function bodyFixHeight() {
        var vh = $(window).height();
        $(".main-block").css("height", ($(window).height()) - 75 + "px");
        if( vh < 970){
                $("section").css("min-height", ($(window).height()) - 75 + "px")};
    };
    bodyFixHeight();
    $(window).resize(function () {
        var vw = $(window).width()
            , vh = $(window).height();
        $(".main-block").css("min-height", vh - 75 + "px");
        bodyFixHeight();
    });
    $("li.to-home").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    $("li.toSection1").click(function () {
        $("html,body").animate({
            scrollTop: $(".section1").offset().top - 75
        }, 1000);
        return false;
    });
    $("li.toSection2").click(function () {
        $("html,body").animate({
            scrollTop: $(".section2").offset().top - 75
        }, 1000);
        return false;
    });
    $("li.toSection3").click(function () {
        $("html,body").animate({
            scrollTop: $(".section3").offset().top - 75
        }, 1000);
        return false;
    });
    $("li.toSection4").click(function () {
        $("html,body").animate({
            scrollTop: $(".section4").offset().top - 75
        }, 1000);
        return false;
    });
    $("li.toSection5").click(function () {
        $("html,body").animate({
            scrollTop: $(".section5").offset().top - 75
        }, 1000);
        return false;
    });
    $("li.toSection6").click(function () {
        $("html,body").animate({
            scrollTop: $(".section6").offset().top - 75
        }, 1000);
        return false;
    });

    function up() {
        var section2Top = ($(".section1").offset().top) / 3;
        if ($(document).scrollTop() >= section2Top) {
            $(".up-btn").css("display", "block")
        }
        else if ($(document).scrollTop() < section2Top) {
            $(".up-btn").css("display", "none")
        }
    };
    $(document).scroll(function () {
        up();
    })
    $(".up-btn").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});