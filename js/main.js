function bodyFixHeight() {
    $("#header").css("height", ($(window).height()) + "px");
    //        $("section").css("min-height", ($(window).height()) + "px");
};
$(window).resize(function () {
    var vw = $(window).width()
        , vh = $(window).height();
    $("#header").css("min-height", vh - 70 + "px");
    bodyFixHeight();
})
$(document).ready(function () {
    bodyFixHeight();
});