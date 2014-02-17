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
/*      this.model.set({
        attack:             this.$('.attack').val(),
        catch_rate:         this.$('.catch_rate').val(),
        defense:            this.$('.defense').val(),
        egg_cycles:         this.$('.egg_cycles').val(),
        ev_yield:           this.$('.ev_yield').val(),
        exp:                this.$('.exp').val(),
        growth_rate:        this.$('.growth_rate').val(),
        happiness:          this.$('.happiness').val(),
        height:             this.$('.height').val(),
        hp:                 this.$('.hp').val(),
        image_url:          this.$('.image_url').val(),
        male_female_ratio:  this.$('.male_female_ratio').val(),
        sp_atk:             this.$('.sp_atk').val(),
        sp_def:             this.$('.sp_def').val(),
        species:            this.$('.species').val(),
        speed:              this.$('.speed').val(),
        total:              this.$('.total').val(),
        weight:             this.$('.weight').val()
      });
 */
      this.model.save({}, {success: function(){ window.pokemon_list_view.collection.fetch()}});
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
