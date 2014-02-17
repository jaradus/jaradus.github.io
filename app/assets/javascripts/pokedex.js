var Pokemon = Backbone.Model.extend({
    url: function(){
      if(this.get("id")){
          return "/pokemons/" + this.get("id");
      } else {
          return '/pokemons';
      }
    },

    defaults: {
        image_url: ""
    }
});

var PokemonCollection = Backbone.Collection.extend({
    model: Pokemon,
    url: "/pokemons"
});

var PokemonView = Backbone.View.extend({

    initialize: function() {
        this.model.view = this;
    },

    el: function() {
        return $(this.template(this.model.attributes));
    },
    template: function(attribute_hash) {
        var html_string = $("#pokemon_template").html();

        var template_function = _.template(html_string);
        return template_function(attribute_hash);
    },

    events: {
        "click .update": "sync",
        "click .delete": "delete"
    },


    sync: function(){
        console.log("worked");
        var self = this;
        for ( var attr in this.model.attributes ) {
            if (attr == 'id') {
                continue;
            }
            this.model.set(
                attr, self.$("."+attr+"_input").val()
            );
        }

      this.model.save({}, {success: function(){ window.pokemon_list_view.collection.fetch()}});
    },

    render: function() {

        $('#pokemon_headshot').empty();
        $('#pokemon_headshot').remove();

        $('#pokemon_stats').empty();
        $('#pokemon_stats').remove();

        $("#pokemon_container").append( this.$el );

        if (this.model.get("id")) {
            // Append edit and update buttons if item is in the database
            this.$el.append($("<button>", {class: "update", text: "update"}));
            this.$el.append($("<button>", {class: "delete", text: "delete"}));
        }

    },

    delete: function(){
        console.log("BLAH!")
      this.model.destroy({success: function(){ window.pokemon_list_view.collection.fetch()}});
    }

});

var PokemonSelectView = Backbone.View.extend({
    initialize: function() {
        var self = this;
        this.collection = new PokemonCollection();
        this.views = [];

        this.render();

        $("#view_in_pokedex_btn").on("click", function() {
            var pokemon_name = $(this).parent().find("#pokemon_select").val();

            _.each(window.pokemon_list_view.collection.models, function(pokemon){
                if (pokemon.get("name") == pokemon_name ){
                    pokemon.view.render();
            }
            });
        });


        this.collection.on("sync", function(){
            self.render();
        });
        this.createTemplateEvent();
    },



    createTemplateEvent: function() {

        var create_action =  function() {
            $("#create_new_pokemon").on("click", function() {
                var new_pokemon = new Pokemon();
                var new_pokemon_view = new PokemonView({model: new_pokemon});
                console.log(new_pokemon_view);
                console.log(new_pokemon_view.attributes);
                new_pokemon_view.sync();
            });
        };

        $("#add_new_pokemon_btn").on("click", function() {
            var template =  function() {
                var html_string = $("#new_pokemon_template").html();
                //var template_function = _.template(html_string);
                return html_string;
            };

            $("#pokemon_container").append( template() );
            $("#pokemon_container").find("#pokemon_headshot").append("<button id='create_new_pokemon'>Create</button>");
            create_action();
        });

    },

    el: function() {
        return $("#pokemon_select");
    },

    render: function() {
        var self = this;

        $('#pokemon_select').empty();

        _.each(this.views, function(view) {
            view.remove();
        });

        _.each(this.collection.models, function(pokemon) {
            var pokemon_view = new PokemonView({model: pokemon });

            self.$el.append("<option>"+ pokemon_view.model.get("name") + "</option>" );
            self.views.push(pokemon_view);
        });
    }
});


$(function(){
    window.pokemon_list_view = new PokemonSelectView();
    window.pokemon_list_view.collection.fetch();
});
