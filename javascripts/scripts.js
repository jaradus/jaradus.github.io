var parallax = (function() {
  'use strict';

  var $container = $('.parallax'),
    $divs = $container.find('div.parallax-background'),
    len = $divs.length,
    liHeight = $divs.first().closest('li').height(),
    diffHeight = $divs.first().height() - liHeight,
    bodyScroll = document.body,
    top,
    i,
    $div,
    offset,
    scroll;

  return function render() {
    top = bodyScroll.scrollTop;

    for (i = 0; i < len; i++) {

      $div = $divs.eq(i);

      offset = $div.offset().top;

      scroll = Math.round(((top - offset) / liHeight) * diffHeight);

      $div.css('webkitTransform', "translate3d(0px, " + scroll + "px, " + scroll*(-20000) +"px)");
    }
  };

})();

var consoleName = function(){

  console.log("      ___                       ___           ___           ___     ")
  console.log("     /  /\\          ___        /__/\\         /  /\\         /__/\\      ")
  console.log("    /  /:/_        /  /\\       \\  \\:\\       /  /::\\        \\  \\:\\     ")
  console.log("   /  /:/ /\\      /  /:/        \\__\\:\\     /  /:/\\:\\        \\  \\:\\    ")
  console.log("  /  /:/ /:/_    /  /:/     ___ /  /::\\   /  /:/~/::\\   _____\\__\\:\\   ")
  console.log(" /__/:/ /:/ /\\  /  /::\\    /__/\\  /:/\\:\\ /__/:/ /:/\\:\\ /__/::::::::\\  ")
  console.log(" \\  \\:\\/:/ /:/ /__/:/\\:\\   \\  \\:\\/:/__\\/ \\  \\:\\/:/__\\/ \\  \\:\\~~\\~~\\/  ")
  console.log("  \\  \\::/ /:/  \\__\\/  \\:\\   \\  \\::/       \\  \\::/       \\  \\:\\  ~~~   ")
  console.log("   \\  \\:\\/:/        \\  \\:\\   \\  \\:\\        \\  \\:\\        \\  \\:\\       ")
  console.log("    \\  \\::/          \\__\\/    \\  \\:\\        \\  \\:\\        \\  \\:\\      ")
  console.log("     \\__\\/                     \\__\\/         \\__\\/         \\__\\/      ")
  console.log("")
  console.log("                               Hi there!")
  console.log("                       Looking for a developer?")
  console.log("                              Let's talk.")
  console.log("")

}

$(function(){

  consoleName();

  $(".header .attributes").typeOut();

  $(window).on('scroll', parallax);

})