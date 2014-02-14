var Pokemon = Backbone.Model.extend({


});

var PokemonCollection = Backbone.Collection.extend({
    model: Pokemon,
    url: "/pokemons"
});

var PokemonView = Backbone.View.extend({
    render: function(){
        this.$el.html(this.template(this.model.attributes) );
        return this;
    },

    template: function() {
        return _.template("<tr></tr><tr></tr>");
    }
});

var PokemonListView = Backbone.View.extend({

});


$(function(){

});
