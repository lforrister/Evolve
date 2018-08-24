console.log("SCRIPT.JS TEST TEST TEST");




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


// Archive Toggle 
$(document).ready(function() {
    console.log("jQuery Working");
    $("#posts18").hide();
    $("#posts17").hide();
    $("#posts16").hide();
});

$("#year-18").click(function() {
    $("#posts18").toggle();
    $("#posts17").hide();
    $("#posts16").hide();
});

$("#year-17").click(function () {
    $("#posts17").toggle();
    $("#posts18").hide();
    $("#posts16").hide();
});

$("#year-16").click(function () {
    $("#posts16").toggle();
    $("#posts18").hide();
    $("#posts17").hide();
});


// Carousel:

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " w3-white";
}