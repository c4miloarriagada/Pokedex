import { loading, loadPokemons, parseNameOfPokemons } from "./pokemonSlice";

const POKE_API_URL = `https://pokeapi.co/api/v2/pokemon`;

export const getPokemons = () => {
  return async (dispacth, getState) => {
    dispacth(loading());
    let data = await fetch(`${POKE_API_URL}?limit=1500&offset=0`, {
      method: "GET",
      mode: "cors",
    });
    data = await data.json();
    dispacth(parseNameOfPokemons(data.results));
  };
};

export const getPokemonsInfo = (pokemons) => {
  return async (dispacth, getState) => {
    dispacth(loading());
    const begin = getState().pokemons.begin;
    const end = getState().pokemons.end;
    const nameOfPokemons = pokemons.slice(begin, end);
    const responses = await Promise.all(
      nameOfPokemons.map((name) => fetch(`${POKE_API_URL}/${name}`))
    );
    
    const firstTenPokemons = await Promise.all(
      responses.map((response) => response.json())
    );
    
 
    dispacth(loadPokemons(firstTenPokemons));
  };
};
