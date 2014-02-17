var Pokemon = Backbone.Model.extend({
    url: function(){
      if(this.get("id")){
          return "/pokemons/" + this.get("id");
      } else {
          return '/pokemons';
      }
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
      var self = this;
        for ( var attr in this.model.attributes ) {
            this.model.set(
                attr, self.$("." + attr).val()
            );
        }
      this.model.save({}, {success: function(){ window.pokemon_list_view.collection.fetch()}});
    },

    render: function() {
        $("#pokemon_container").append( this.$el );
    },

    delete: function(){
      this.model.destroy();
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
    },

    el: function() {
        return $("#pokemon_select");
    },

    render: function() {
        var self = this;
        _.each(this.views, function(view) {
            view.remove();
        });

        _.each(this.collection.models, function(pokemon) {
            var pokemon_view = new PokemonView({model: pokemon });
/*
 self.$el.append(pokemon_view.$el);
            if (pokemon_view.model.get("id")) {
                // Append edit and update buttons if item is in the database
                pokemon_view.$('.pokemon_stats').append($("<button>", {class: "update", text: "update"}));
                pokemon_view.$('.pokemon_stats').append($("<button>", {class: "delete", text: "delete"}));
            }
 */
            self.$el.append("<option>"+ pokemon_view.model.get("name") + "</option>" );
            self.views.push(pokemon_view);
        });
    }
});


$(function(){
    window.pokemon_list_view = new PokemonSelectView();
    window.pokemon_list_view.collection.fetch();
});
