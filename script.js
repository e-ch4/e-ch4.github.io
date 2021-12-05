/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and rotates a button you can add from the README
*/

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
    var pos = $(this).offset().top + $(this).outerHeight(true)*0.75 - $w.scrollTop();
    
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

  // $(".outline").each(function() {
  //   if ($w.scrollTop() <= $(this).offset().top + $w.height()) {
  //     var $len = $(this).getTotalLength();
  //     var percent = ($w.scrollTop() + $w.height - $(this).offset().top)/ $len;
  //     $(this).css("stroke-dashoffset", percent * $len)
  //   }
  // })
});


// Load about content from about.html
$('#about').load("about.html");
$('#resume').load("resume.html")
$('#contact').load("contact.html")
// Testing animated svg
// $('#ani-icon-lab').load("flask.html")

// Testing scroll magic
// var pageControl = new ScrollMagic.Controller();
// // var labScene = new ScrollMagic.Scene({
// //   triggerElement: '.flask-icon';
// //   duration: 200;
// // }).addTo(pageControl);

// function pathSetSVG ($el) {
//   var lineLength = $el[0].getTotalLength();
//   $el.css("stroke-dasharray", lineLength);
//   $el.css("stroke-dashoffset", lineLength);
// };

// // var elements = [
// //   "path#flask-outline", "path#flask-subline1", "path#subline2"
// // ];
// // elements.forEach(function(item, index, array) {
// //   pathSetSVG($(item));
// //   console.log(item);
// // });

// // var tween = new TimelineMax()

// // elements.forEach(function(item, index, array) {
// //   tween.add(TweenMax.to($(item), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
// // });

// var $flaskOutline = $("path#flask-outline");
// var $flaskSubline1 = $("path#flask-subline1");
// var $flaskSubline2 = $("path#flask-subline2");

// var tween = new TimelineMax().add(TweenMax.to($flaskOutline, 0.9, {strokeDashofffset:0, ease:Linear.easeNone})).add(TweenMax.to($flaskSubline1, 0.1, {strokeDashofffset:0, ease:Linear.easeNone})).add(TweenMax.to($flaskSubline2, 0.1, {strokeDashofffset:0, ease:Linear.easeNone});)
// var iconScene = new ScrollMagic.Scene({triggerElement: "#flask-icon", duration: 200, tweenChanges: true}).setTween(tween).addTo(pageControl);

