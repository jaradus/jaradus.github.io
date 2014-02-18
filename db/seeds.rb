puts "=============================="
puts "Seed Task Started"
puts "=============================="

Pokemon.delete_all
puts "All pokemon deleted"


pokemon = HTTParty.get('http://pokeapi.co/api/v1/pokedex/1/')
puts "Pokemon Names Downloaded"

pokemon['pokemon'].each do |p|
  pokemon_route = p['resource_uri']
  data = HTTParty.get('http://pokeapi.co/'+pokemon_route)
  image_url = 'http://pokeapi.co/media/img/'+data['national_id'].to_s+'.png'

  new_pokemon = Pokemon.create({
                  attack:             data['attack'],
                  catch_rate:         data['catch_rate'],
                  defense:            data['defense'],
                  egg_cycles:         data['egg_cycles'],
                  ev_yield:           data['ev_yield'],
                  exp:                data['exp'],
                  growth_rate:        data['growth_rate'],
                  happiness:          data['happiness'],
                  height:             data['height'],
                  hp:                 data['hp'],
                  image_url:          image_url,
                  male_female_ratio:  data['male_female_ratio'],
                  name:               data['name'],
                  national_id:        data['national_id'],
                  resource_uri:       data['resource_uri'],
                  sp_atk:             data['sp_atk'],
                  sp_def:             data['sp_def'],
                  species:            data['species'],
                  speed:              data['speed'],
                  total:              data['total'],
                  weight:             data['weight']
                  })

  puts "[Pokemon] #{new_pokemon.name} created"

end

puts "=============================="
puts "Seed Task Completed"
puts "=============================="


