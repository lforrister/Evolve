$(document).ready(function () {
    console.log("jQuery Working");
    $("#posts18").hide();
    $("#posts17").hide();
    $("#posts16").hide();
    $(".jan").hide();
    $(".feb").hide();
    $(".march2").hide();
    $(".april2").hide();
    $(".may2").hide();
    $(".june2").hide();
    $(".july2").hide();
    $(".aug").hide();
    $(".sept").hide();
    $(".oct").hide();
    $(".nov").hide();
    $(".dec").hide();
    

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


// Archive Toggle 

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

$(".january").click(function () {
   $(".jan").toggle();
   $(".feb").hide();
   $(".march2").hide();
   $(".april2").hide();
   $(".may2").hide();
   $(".june2").hide();
   $(".july2").hide();
   $(".aug").hide();
   $(".sept").hide();
   $(".oct").hide();
   $(".nov").hide();
   $(".dec").hide();
});

$(".february").click(function () {
    $(".feb").toggle();
    $(".jan").hide();
    $(".march2").hide();
    $(".april2").hide();
    $(".may2").hide();
    $(".june2").hide();
    $(".july2").hide();
    $(".aug").hide();
    $(".sept").hide();
    $(".oct").hide();
    $(".nov").hide();
    $(".dec").hide();
});

$(".march").click(function () {
    $(".march2").toggle();
    $(".jan").hide();
    $(".feb").hide();
    $(".april2").hide();
    $(".may2").hide();
    $(".june2").hide();
    $(".july2").hide();
    $(".aug").hide();
    $(".sept").hide();
    $(".oct").hide();
    $(".nov").hide();
    $(".dec").hide();
});

$(".april").click(function () {
    $(".april2").toggle();
    $(".jan").hide();
    $(".feb").hide();
    $(".march2").hide();
    $(".may2").hide();
    $(".june2").hide();
    $(".july2").hide();
    $(".aug").hide();
    $(".sept").hide();
    $(".oct").hide();
    $(".nov").hide();
    $(".dec").hide();
});

$(".may").click(function () {
    $(".may2").toggle();
    $(".jan").hide();
    $(".feb").hide();
    $(".march2").hide();
    $(".april2").hide();
    $(".june2").hide();
    $(".july2").hide();
    $(".aug").hide();
    $(".sept").hide();
    $(".oct").hide();
    $(".nov").hide();
    $(".dec").hide();
});

$(".june").click(function () {
    $(".june2").toggle();
    $(".jan").hide();
    $(".feb").hide();
    $(".march2").hide();
    $(".april2").hide();
    $(".may2").hide();
    $(".july2").hide();
    $(".aug").hide();
    $(".sept").hide();
    $(".oct").hide();
    $(".nov").hide();
    $(".dec").hide();
});

$(".july").click(function () {
    $(".july2").toggle();
    $(".jan").hide();
    $(".feb").hide();
    $(".march2").hide();
    $(".april2").hide();
    $(".may2").hide();
    $(".june2").hide();
    $(".aug").hide();
    $(".sept").hide();
    $(".oct").hide();
    $(".nov").hide();
    $(".dec").hide();
});

$(".august").click(function () {
    $(".aug").toggle();
    $(".jan").hide();
    $(".feb").hide();
    $(".march2").hide();
    $(".april2").hide();
    $(".may2").hide();
    $(".june2").hide();
    $(".july2").hide();
    $(".sept").hide();
    $(".oct").hide();
    $(".nov").hide();
    $(".dec").hide();
});

$(".september").click(function () {
    $(".sept").toggle();
    $(".jan").hide();
    $(".feb").hide();
    $(".march2").hide();
    $(".april2").hide();
    $(".may2").hide();
    $(".june2").hide();
    $(".july2").hide();
    $(".aug").hide();
    $(".oct").hide();
    $(".nov").hide();
    $(".dec").hide();
});

$(".october").click(function () {
    $(".oct").toggle();
    $(".jan").hide();
    $(".feb").hide();
    $(".march2").hide();
    $(".april2").hide();
    $(".may2").hide();
    $(".june2").hide();
    $(".july2").hide();
    $(".aug").hide();
    $(".sept").hide();
    $(".nov").hide();
    $(".dec").hide();
});

$(".november").click(function () {
    $(".nov").toggle();
    $(".jan").hide();
    $(".feb").hide();
    $(".march2").hide();
    $(".april2").hide();
    $(".may2").hide();
    $(".june2").hide();
    $(".july2").hide();
    $(".aug").hide();
    $(".sept").hide();
    $(".oct").hide();
    $(".dec").hide();
});

$(".december").click(function () {
    $(".dec").toggle();
    $(".jan").hide();
    $(".feb").hide();
    $(".march2").hide();
    $(".april2").hide();
    $(".may2").hide();
    $(".june2").hide();
    $(".july2").hide();
    $(".aug").hide();
    $(".sept").hide();
    $(".oct").hide();
    $(".nov").hide();
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