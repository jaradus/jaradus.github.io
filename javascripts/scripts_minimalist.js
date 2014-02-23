// #################################################
// ##########    JS Console Greeting    ############
// #################################################

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


// ######################################
// ##########    Parallax    ############
// ######################################

var parallax = (function() {
  'use strict';

  // console.log("Parallax called")

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

// ####################################
// ##########    Router    ############
// ####################################

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


// ##########################################
// ##########    UI Generator    ############
// ##########################################

var UI = Backbone.View.extend({

  initialize: function(attributes){
    this.render({
      heading: new UI.Heading(),
      body:    new UI.Body(),
      footer:  new UI.Footer()
    });

    if (app.current_page == "portfolio") {
      console.log("Portfolio")
      $(window).on('scroll', parallax)
    }

    $('')

  },

  el: function(){
    return $('#main_container');
  },

  render: function(sub_views){
    var self = this;
    this.$el.empty();

    _.each(this.sub_views, function(view){
      view.remove();
    })

    this.sub_views = sub_views;

    _.each(this.sub_views, function(view){
      var view_el = view.render().$el
      self.$el.append(view_el)
      $('.container').delay(100).animate({ opacity: 1 }, 100)
    })
    return this;

  }

})

// ####################################
// ##########    Header    ############
// ####################################

UI.Heading = Backbone.View.extend({
  initialize: function(){
    
  },

  render: function(){
    this.$el.html(this.template({
      page_name: app.current_page
    }))
    return this;
  },

  template: function(){
    var template = $('#header_template').html()
    return template
  }

})

// ####################################
// ###########    Body    #############
// ####################################

UI.Body = Backbone.View.extend({
  initialize: function(){

  },

  render: function(){
    this.$el.html(this.template(app.current_page))
    return this
  },

  template: function(template_name){
    switch (template_name) {
      case "home":
        var source = $('#about_template').html();
        break;
      case "about":
        var source = $('#about_template').html();
        break;
      case "portfolio":
        var source = $('#portfolio_template').html();
        break;
      default:
        var source = $('#about_template').html();
        break;
    }

    return source;
  }

})

// ####################################
// ##########    Footer    ############
// ####################################

UI.Footer = Backbone.View.extend({

  initialize: function(){

  },
  render: function(){
    this.$el.html(this.template())
    return this;
  },
  template: function(){
    var template = $('#footer_template').html()
    return template
  }

})


// ###############################################
// ##########    On Document Ready    ############
// ###############################################

$(function(){

  $(window).on('scroll', parallax);

  // instantiates app Router
  window.app = new App();

  // required code to use Router
  Backbone.history.start();

  // Puts the name ASCII art and greeting in the Javascript console
  consoleName();

})