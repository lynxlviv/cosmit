$(document).ready(function () {
    var mainBlock = $(".main-block");
    var contetnBlock = $(".content");
    var headerLi = $('#responsive-top-menu ul li');
    var headerNav = $('.top-navigation-box');
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    const HEADER_HEIGHT = 55;

    function liFixHeight() {
        vw = window.innerWidth;
        vh = window.innerHeight;
        if ($(document).scrollTop() > vh) {
            if (vw > 767) {
                headerLi.css("height", 55 + "px");
            }
            else {
                headerLi.css("height", "auto");
            }
        }
        else {
            if (vw > 767) {
                headerLi.css("height", 75 + "px");
            }
            else {
                headerLi.css("height", "auto");
            }
        }
    }

    function bodyFixHeight() {
        mainBlock.css("height", (vh) - 55 + "px");
        contetnBlock.css("top", $(window).height() + 55 + "px");
        if (vw > 970) {
            $("section").css("min-height", ($(window).height()) - 55 + "px")
        }
        else {
            return false;}
    }
    bodyFixHeight();
    $(window).resize(function () {
        vw = window.innerWidth,
            vh = window.innerHeight;
        mainBlock.css("min-height", vh - 55 + "px");
        bodyFixHeight();
        liFixHeight()
    });
    $(document).on('click', '#MainNavigation li', function () {

        var scrollTo = $(this).data('scrollto');
        var el = $('.' + scrollTo);

        if (scrollTo == 'main-block') {
            animateBody(0);
        }
        else {
            var _s = el.offset().top - 55;
            animateBody(_s);
        }
    });

    function animateBody(size) {
        $("html,body").animate({
            scrollTop: size
        }, 1000);
    }
    $(window).scroll(function () {
 vh = window.innerHeight;
        liFixHeight();

        if ($(document).scrollTop() > vh) {
            headerNav.addClass('top-navigation-box-collapse');
           
            $('.big-logo').addClass("none");
            $('.small-logo').addClass("block");
   
  
        }
        else {
         headerNav.removeClass('top-navigation-box-collapse');
            
            $('.big-logo').removeClass("none");
            $('.small-logo').removeClass("block");
        
 
            
         }
    })
});