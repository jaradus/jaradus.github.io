<script id="pokemon_template" type="text/template">
<div id='pokemon_headshot'>
  <img src=<%= image_url %> />
  <h1><%= name %></h1>
</div>

<div id="pokemon_stats">
  <ul>
    <li>Attack:               <input type='text' class='attack_input' value=<%= attack %> /></li>
    <li>Catch Rate:           <input type='text' class='catch_rate_input' value=<%= catch_rate %> /></li>
    <li>Defense:              <input type='text' class='defense_input' value=<%= defense %> /></li>
    <li>Egg Cycles:           <input type='text' class='egg_cycles_input' value=<%= egg_cycles %> /></li>
    <li>EV Yield:             <input type='text' class='ev_yield_input' value=<%= ev_yield %> /></li>
    <li>Exp:                  <input type='text' class='exp_input' value=<%= exp %> /></li>
    <li>Growth Rate:          <input type='text' class='growth_rate_input' value=<%= growth_rate %> /></li>
    <li>Happiness:            <input type='text' class='happiness_input' value=<%= happiness %> /></li>
    <li>Height:               <input type='text' class='height_input' value=<%= height %> /></li>
    <li>HP:                   <input type='text' class='hp_input' value=<%= hp %> /></li>
    <li>Male-to-Female Ratio: <input type='text' class='male_female_ratio_input' value=<%= male_female_ratio %> /></li>
    <li>SP Attack:            <input type='text' class='sp_atk_input' value=<%= sp_atk %> /></li>
    <li>SP Defense:           <input type='text' class='sp_def_input' value=<%= sp_def %> /></li>
    <li>Species:              <input type='text' class='species_input' value=<%= species %> /></li>
    <li>Speed:                <input type='text' class='speed_input' value=<%= speed %> /></li>
    <li>Total:                <input type='text' class='total_input' value=<%= total %> /></li>
    <li>Weight:               <input type='text' class='weight_input' value=<%= weight %> /></li>
    <li>Image Url:            <input type='text' class='image_url_input' value=<%= image_url %> /></li>
    <li>Name:                 <input type='text' class='name_input' value=<%= name %> /></li>
    <li>National ID:          <input type='text' class='national_id_input' value=<%= national_id %> /></li>
    <li>Resource Uri:         <input type='text' class='resource_uri_input' value=<%= resource_uri %> /></li>
  </ul>
</div>
</script>

<script id="new_pokemon_template" type="text/template">
<div id='pokemon_headshot'>
  <h1>New Pokemon</h1>
</div>

<div id="pokemon_stats">
  <ul>
    <li>Attack:               <input type='text' class='attack_input' placeholder="Attack" /></li>
    <li>Catch Rate:           <input type='text' class='catch_rate_input' placeholder="Catch Rate" /></li>
    <li>Defense:              <input type='text' class='defense_input' placeholder="Defense" /></li>
    <li>Egg Cycles:           <input type='text' class='egg_cycles_input' placeholder="Egg Cycles" /></li>
    <li>EV Yield:             <input type='text' class='ev_yield_input' placeholder="EV Yield" /></li>
    <li>Exp:                  <input type='text' class='exp_input' placeholder="Exp" /></li>
    <li>Growth Rate:          <input type='text' class='growth_rate_input' placeholder="Growth Rate" /></li>
    <li>Happiness:            <input type='text' class='happiness_input' placeholder="Happiness" /></li>
    <li>Height:               <input type='text' class='height_input' placeholder="Height" /></li>
    <li>HP:                   <input type='text' class='hp_input' placeholder="HP" /></li>
    <li>Male-to-Female Ratio: <input type='text' class='male_female_ratio_input' placeholder="Male-to-Female Ratio" /></li>
    <li>SP Attack:            <input type='text' class='sp_atk_input' placeholder="SP Attack" /></li>
    <li>SP Defense:           <input type='text' class='sp_def_input' placeholder="SP Defense" /></li>
    <li>Species:              <input type='text' class='species_input' placeholder="Species" /></li>
    <li>Speed:                <input type='text' class='speed_input' placeholder="Speed" /></li>
    <li>Total:                <input type='text' class='total_input' placeholder="Total" /></li>
    <li>Weight:               <input type='text' class='weight_input' placeholder="Weight" /></li>
    <li>Image Url:            <input type='text' class='image_url_input' placeholder="Image Url" /></li>
    <li>Name:                 <input type='text' class='name_input' placeholder="Name" /></li>
    <li>National ID:          <input type='text' class='national_id_input' placeholder="National ID" /></li>
    <li>Resource Uri:         <input type='text' class='resource_uri_input' placeholder="Resource Uri" /></li>
  </ul>
</div>
</script>