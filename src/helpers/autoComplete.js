export const autoComplete = (pokemons , target) => {
    if(target && pokemons){
        target = target
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      let pokemon = pokemons?.filter((e) => {
        let pokemonFilter = e
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(target.toLowerCase());
        return pokemonFilter;
      });

      pokemon = pokemon.slice(0, 4)
  
      return {
        pokemon
      }
    }
    return {

    }
}