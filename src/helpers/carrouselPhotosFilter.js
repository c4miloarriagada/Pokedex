export const carrouselPhotoFilter = (pokemons, id) => { 

  let pokemon = pokemons.find((e) => e.id === parseInt(id))
    let sprites = []
    if(!pokemon) return
    let abilities = []
    let info = {sprites: [], abilities: []}

    sprites.push(pokemon.name)
    sprites.push(pokemon.sprites.other.dream_world.front_default)
    sprites.push(pokemon.sprites.back_default)
    sprites.push(pokemon.sprites.front_shiny)
    sprites.push(pokemon.sprites.front_default)
    sprites.push(pokemon.sprites.back_shiny)

    pokemon.abilities?.forEach((e)=> {
      abilities.push(e)
    })

    info.sprites.push(sprites)
    info.abilities.push(abilities)

  return  info
}