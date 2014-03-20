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

  // var parallax = function(){
  //   console.log("Parallax");
  //   var scrolled = $(window).scrollTop();
  //   $('.parallax-bg').css('top', (0 - (scrolled * .75)) + 'px');
  //   $('.parallax-bg2').css('top', (0 - (scrolled * .50)) + 'px');
  // };

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
    console.log("Home")
    app.current_page = "home"
    if (ui) ui.remove()
    var ui = new UI()
  },

  about: function(){
    console.log("About")
    app.current_page = "about"
    if (ui) ui.remove()
    var ui = new UI()
  },

  portfolio: function(){
    console.log("Portfolio")
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
      nav:     new UI.Nav(),
      footer:  new UI.Footer()
    });

    $('.email_link').attr('href',"mailto:ethan.developer@icloud.com?subject=Hello");
    $('.nav-links-trigger').click(function(e){
      $(this).toggleClass("nav-bar-open");
      $('.nav-links').toggleClass("hidden").delay(100).animate({ opacity: 1 }, 100);
    })

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

    if (app.current_page == "portfolio" && $(window).width() < 768 ) {
      console.log("Mobile view")
      $('.portfolio_window').click(function(e){
        var target = $(e.target).closest("li.portfolio_window");
        var technology_array = [];
        $.each(target.find("[window-data='technology']"),function(index,technology){ 
                                                                                      technology_array.push(technology.innerText);
                                                                                    });
        var data_hash = {
                            target: {
                                    "project_title": target.find("[window-data='project_title']")[0].innerHTML,
                                    "category":      target.find("[window-data='category']")[0].innerHTML,
                                    "description":   target.find("[window-data='description']")[0].innerHTML,
                                    "site_url":      $(target.find("[window-data='site_url']")[0]).find('a').attr('href'),
                                    "github_repo":   $(target.find("[window-data='github_repo']")[0]).find('a').attr('href'),
                                    "technologies":  technology_array
                                    }
                            }
        window.technology = target.find("[window-data='technology']")
        var source = $('#portfolio_modal').html();
        var template = Handlebars.compile(source);
        var modal = template(data_hash);

        $('body').prepend(modal)
        $('#main_container').css("background", "#4c4c4c").animate({ opacity: 0.3 }, 100)
        $("[window-data='project_title']").css("color", "#cccccc").animate({ opacity: 0.3 }, 100)
        $("[window-data='category']").css("color", "#b3b3b3").animate({ opacity: 0.3 }, 100)
        $("div[window-type='modal']").delay(50).animate({ opacity: 1 }, 175)

        $(".exit_modal").click(function(e){
          $("[window-type='modal']").slideUp({duration: 200}, function(){ $(this).remove(); });
          $('#main_container').removeAttr('style');
          $("[window-data='project_title']").removeAttr('style');
          $("[window-data='category']").removeAttr('style');
        })

      })
    }

    // if (app.current_page == "portfolio") {
    //   console.log("Parallax on")
    //   $(function() {
    //     $(window).on('scroll', parallax);
    //   });
    // }

    // if (app.current_page !== "portfolio") {
    //   console.log("Parallax off")
    //   $(window).unbind('scroll');
    // }

    return this;

  }

})

// ####################################
// ##########    Header    ############
// ####################################

UI.Heading = Backbone.View.extend({
  initialize: function(){
    
  },

  el: "<div class='header-bar'>",

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

// #################################
// ##########    Nav    ############
// #################################

UI.Nav = Backbone.View.extend({
  initialize: function(){
    
  },

  render: function(){
    this.$el.html(this.template({
      page_name: app.current_page
    }))
    return this;
  },

  template: function(){
    var template = $('#nav_template').html()
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
    var self = this;
    switch (template_name) {
      case "home":
        var source = $('#home_template').html();
        break;
      case "about":
        var source = $('#about_template').html();
        break;
      case "portfolio":
        var pre_compiled_source = $('#portfolio_template').html();
        var template = Handlebars.compile(pre_compiled_source);
        var data;

        // Gets the Portfolio json data
        $.ajax({
                url: './views/portfolio/portfolio.json',
                method: 'get',
                async: false,
                success: function(json) {
                  data = json;
                }
        });

        var source = template(data)
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

  // instantiates app Router
  window.app = new App();

  // required code to use Router
  Backbone.history.start();

  // Puts the name ASCII art and greeting in the Javascript console
  consoleName();

})