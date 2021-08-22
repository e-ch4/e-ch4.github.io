// window.alert('ready');
var initialAnimation = new TimelineMax();
initialAnimation.from($('#trigger'), 0.5, {
    autoAlpha: 0
});

var controller = new ScrollMagic.Controller();

var firstTrigger = new TimelineMax().add([TweenMax.to('#trigger', 1, {
    autoAlpha: 0
})]);

var firstScrollTrigger = new ScrollMagic.Scene({
    triggerElement: '#trigger',
    triggerHook: 0,
    duration: '100%'
}).setTween(firstTrigger).setPin('#trigger', {pushFollowers: true}).addTo(controller).addIndicators();