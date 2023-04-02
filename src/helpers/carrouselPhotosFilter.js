export const carrouselPhotoFilter = (pokemons, id) => { 

  let pokemon = pokemons.find((e) => e.id === parseInt(id))
    let sprites = []
    if(!pokemon) return
    sprites.push(pokemon.name)
    sprites.push(pokemon.sprites.other.dream_world.front_default)
    sprites.push(pokemon.sprites.front_default)
    sprites.push(pokemon.sprites.back_default)
    sprites.push(pokemon.sprites.front_shiny)
    sprites.push(pokemon.sprites.back_shiny)
    


  
  return sprites

}