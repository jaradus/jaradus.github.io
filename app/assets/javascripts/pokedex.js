var Pokemon = Backbone.Model.extend({

});

var PokemonCollection = Backbone.Collection.extend({
    model: Pokemon,
    url: "/pokemons"
});

var PokemonView = Backbone.View.extend({
    el: function() {
        return $(this.template(this.model.attributes));
    },

    template: function(attribute_hash) {
        var html_string = $("#pokemon_template").html();
        var template_function = _.template(html_string);
        return template_function(attribute_hash);
    }
});

var PokemonListView = Backbone.View.extend({
    initialize: function() {
        var self = this;
        this.collection = new PokemonCollection();
        this.views = [];

        this.collection.on("sync", function(){
            self.render();
        })
    },

    el: function() {
        return $("#pokemon_list_view");
    },

    render: function() {
        var self = this;
        _.each(this.views, function(view) {
            view.remove();
        });

        _.each(this.collection.models, function(pokemon) {
            var pokemon_view = new PokemonView({model: pokemon });
            self.$el.append(pokemon_view.$el);
            self.views.push(pokemon_view);
        });
    }
});


$(function(){
    window.pokemon_list_view = new PokemonListView();
    window.pokemon_list_view.collection.fetch();
});
