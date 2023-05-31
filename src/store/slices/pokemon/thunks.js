import { loading, loadPokemons, parseNameOfPokemons, loadPokemon } from "./pokemonSlice";

const POKE_API_URL = `https://pokeapi.co/api/v2/pokemon`;

export const getPokemons = () => {
  return async (dispacth, getState) => {

    let data = await fetch(`${POKE_API_URL}?limit=1500&offset=0`);
    data = await data.json();
    dispacth(parseNameOfPokemons(data.results));
    const begin = getState().pokemons.begin;
    const end = getState().pokemons.end;
    const nameOfPokemons = data.results.slice(begin, end);
    const responses = await Promise.all(
      nameOfPokemons.map(({ name }) => fetch(`${POKE_API_URL}/${name}`))
    );
    
    const firstTwelvePokemons = await Promise.all(
      responses.map((response) => response.json())
    );
    dispacth(loadPokemons(firstTwelvePokemons));
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

export const getPokemon = (pokemon) => {
  return async (dispacth) => {
    dispacth(loading())
    let data = await fetch(`${POKE_API_URL}/${pokemon}`)
    data = await data.json();
    
    dispacth(loadPokemon([data]))

  }
}