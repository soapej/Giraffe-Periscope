

$(document).ready(function() {

  // Gif Scroll
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
    duration: 400 // pin the element for a total of 400px
  })
  .setPin('#pinned-element1'); // the element we want to pin

  // Add Scene to ScrollMagic Controller
  controller.addScene(scene);


});
