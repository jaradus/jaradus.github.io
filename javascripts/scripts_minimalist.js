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


var App = Backbone.Router.extend({

  routes: {
    "": "home",
    "about": "about",
    "portfolio": "portfolio",
  },

  home: function(){
    app.current_page = "home"
    if (ui) ui.remove()
    var ui = new UI()
  },

  about: function(){
    app.current_page = "about"
    if (ui) ui.remove()
    var ui = new UI()
  },

  portfolio: function(){
    app.current_page = "portfolio"
    if (ui) ui.remove()
    var ui = new UI()
  }

})




$(function(){

  // instantiates app Router
  window.app = new App();

  // required code to use Router
  Backbone.history.start();

  // Puts the name ASCII art and greeting in the Javascript console
  consoleName();

})