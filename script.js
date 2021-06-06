/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and rotates a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button rotate when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'rotated' code in style.css
    btn.classList.toggle("rotated");
  };
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

// function getYPos(el) {
//   var boundingRect = el.getBoundingClientRect();
//   return boundingRect.bottom;
// }

// var fade = $('.fade');
// var range = 200;
// window.onscroll = function () {
//     var st = $(this).scrollTop();
//     fade.each(function () {
//         var offset = $(this).offset().top;
//         var height = $(this).outerHeight();
//         offset = offset + height / 1;
//         $(this).css({ 'opacity': 1 - (st - offset + range) / range });
//     });
// };
// var textEl = document.getElementsByClassName("text")[0];
// var fillText = "testing testing 1 2 3".concat("<br>".repeat(40));
// textEl.innerHTML = fillText;

// window.onscroll()
// for (var l=0; l<fadeItems.length; l++) {
//   fadeItems[l].onscroll = function() {

//   };
// };

// Scroll opacity change, courtesy of: https://stackoverflow.com/questions/42949293/fade-elements-as-they-reach-the-top-of-the-page
$(window).scroll(function() {
  // Setting: Start fading halfway up the page
  var startPos = 0.5;

  // Cache window object
  var $w = $(window);

  // Basically, we go through each element and check its relative position within the viewport
  $(".fade").each(function() {
    // Get current relative position in viewport, based on the top edge
    if ($w.scrollTop() == 0) {
      $(this).css("opacity", 1);
      return ;
    }
    var pos = $(this).offset().top + $(this).outerHeight(true)*0.6 - $w.scrollTop();
    
    // Calculate based on mid y point of obj
    // var pos = $(this).offset().top + $(this).outerHeight(true)*0.75 - $w.scrollTop();
    // Get viewport height
    var vh = $w.height();

    if (pos < vh * startPos) {
      // If element has past the starting threshold, we fade it
      var newOpac = (pos / (vh * startPos)) * 1;
      $(this).css("opacity", newOpac);
    } else {
      $(this).css("opacity", 1);
    }
  });
});


// Load about content from about.html
$('#about').load("about.html")
$('#resume').load("resume.html")
$('#contact').load("contact.html")