console.log("Hello world!");


$(".test").click(function() {
    alert("TEST!");
});

/* TABBED WIDGET */

$("#tabs").tabs();







$("#slider").slider({
    range: true,
    values: [17, 67]
});







$("#menu").menu();






// Hover states on the static widgets
$("#dialog-link, #icons li").hover(
    function () {
        $(this).addClass("ui-state-hover");
    },
    function () {
        $(this).removeClass("ui-state-hover");
    }
);