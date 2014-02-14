class PokedexController < ApplicationController
  
  def index
    respond_to do |format|
      format.html
      format.json {render json: Pokemon.all}
    end
  end


  def create
    new_pokemon = Pokemon.create(pokemon_params)
    render json: {success: "Created #{new_pokemon.name}"}
  end


  def update
    target_pokemon = Pokemon.find(params[:id])
    target_pokemon.update_attributes(pokemon_params)
    render json: {success: "Updated #{target_pokemon.name}"}
  end


  def destroy
    target_pokemon = Pokemon.find(params[:id])
    target_pokemon.destroy
    render json: {success: "Destroyed #{target_pokemon.name}"}
  end



  private

  def pokemon_params
    params.require(:pokemon).permit!
  end

end
