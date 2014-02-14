class CreatePokemons < ActiveRecord::Migration
  def change
    create_table :pokemons do |t|
      t.integer   :attack
      t.integer   :catch_rate
      t.integer   :defense
      t.integer   :egg_cycles
      t.integer   :ev_yield
      t.integer   :exp
      t.string    :growth_rate
      t.integer   :happiness
      t.string    :height
      t.integer   :hp
      t.string    :image_url, default: 'images/pokeball.png'
      t.string    :male_female_ratio
      t.string    :name
      t.integer   :national_id
      t.string    :resource_uri
      t.integer   :sp_atk
      t.integer   :sp_def
      t.string    :species
      t.integer   :speed
      t.integer   :total
      t.string    :weight

      t.timestamps
    end
  end
end
