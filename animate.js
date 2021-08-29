// $(window).scroll(function() {
//     // Setting: Start fading halfway up the page
//     var startPos = 0.5;
  
//     // Cache window object
//     var $w = $(window);
  
//     // Basically, we go through each element and check its relative position within the viewport
//     $(".fade").each(function() {
//       // Get current relative position in viewport, based on the top edge
//       if ($w.scrollTop() == 0) {
//         $(this).css("opacity", 1);
//         return ;
//       }
//       var pos = $(this).offset().top + $(this).outerHeight(true)*0.6 - $w.scrollTop();
      
//       // Calculate based on mid y point of obj
//       // var pos = $(this).offset().top + $(this).outerHeight(true)*0.75 - $w.scrollTop();
//       // Get viewport height
//       var vh = $w.height();
  
//       if (pos < vh * startPos) {
//         // If element has past the starting threshold, we fade it
//         var newOpac = (pos / (vh * startPos)) * 1;
//         $(this).css("opacity", newOpac);
//       } else {
//         $(this).css("opacity", 1);
//       }
//     }
// }

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY
    };
}

function scrollFade() {
    const startPos = 100;
    const vh = window.innerHeight;
    var fadeDiv = document.getElementsByClassName("fade");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop == 0) {
        return ;
    }

    for (var i= 0; i < fadeDiv.length; i++) {
        var pos = getOffset(fadeDiv[i]).top + fadeDiv[i].clientHeight*0.9 - scrollTop;
        if (pos < vh - startPos) {
            var newOpac = (pos / (vh - startPos)) * 1;
            fadeDiv[i].style.opacity = newOpac;
        } else {
            fadeDiv[i].style.opacity = 1;
        }
    }
};

window.addEventListener('scroll', scrollFade);
let throttleTimer = false;

function throttle(callback, time) {
    if (throttleTimer) return;

    throttleTimer = true;

    setTimeout(() => { callback(); 
        throttleTimer = false;}, time);
} ;

// console.log('scroll lines');

const scrollOffset = 10;

function getSVGPaths() {
    var scrollElements = document.querySelectorAll(".svg-scroll");
    return scrollElements;
}

// const scrollElements = window.getElementsByClassName(".svg-scroll");
// console.log('found svg');
// const scrollPaths = scrollElement.querySelectorAll(".js-scroll");


function elementInView(el, offset = 0) {
    var elementBot = el.getBoundingClientRect().bottom;
    return Boolean(elementBot <= window.innerHeight - offset);
}

function displayScrollElement(scrollEl) {
    scrollEl.querySelectorAll('.js-scroll').forEach(function(val, ind , arr){ val.classList.add("scrolled")})
    // scrollEl.classList.add('scrolled');
    return scrollEl;
};

function hideScrollElement(scrollEl) {
    scrollEl.querySelectorAll('.js-scroll').forEach(function(val, ind , arr){ val.classList.remove("scrolled")})
    // scrollEl.classList.remove('scrolled');
    return scrollEl;
};

function handleScrollAnimation() {
    // console.log('inside handle');
    let scrollElements = getSVGPaths();
    // console.log(scrollElements.length);
    scrollElements.forEach(function(val, ind, arr) { 
        // console.log(elementInView(val, scrollOffset));
        if (elementInView(val, scrollOffset)) {
            displayScrollElement(val);
            // console.log('displayed')
        } else {
            hideScrollElement(val);
        }
    });
    
};

window.addEventListener('scroll', handleScrollAnimation);
