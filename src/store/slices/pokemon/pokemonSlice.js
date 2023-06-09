import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    isLoading: false,
    activePokemons: [],
    activePokemon: [],
    namePokemons: [],
    begin: 0,
    end: 12,
  },
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    loadPokemons: (state, action) => {
      state.activePokemons = action.payload.map(
        ({ abilities, forms, id, moves, name, sprites, weight, height }) => ({
          abilities,
          forms,
          id,
          moves,
          name,
          sprites,
          weight,
          height,
        })
      );
      state.isLoading = false;
    },
    loadPokemon: (state, action) => {
      state.activePokemon = action.payload.map(
        ({ abilities, forms, id, moves, name, sprites, weight, height }) => ({
          abilities,
          forms,
          id,
          moves,
          name,
          sprites,
          weight,
          height,
        })
      );
      state.isLoading = false;
    },
    parseNameOfPokemons: (state, action) => {
      state.namePokemons = action.payload.map(({ name }) => name);
    },
    pagesController: (state, action) => {
      if (action.payload === "+") {
        state.begin = state.begin + 12;
        state.end = state.end + 12;
      } else {
        if (state.begin - 12 < 0 || state.end - 12 < 0) return;
        state.begin = state.begin - 12;
        state.end = state.end - 12;
      }
    },
  },
});

export const { loading, loadPokemons, parseNameOfPokemons, pagesController, loadPokemon } =
  pokemonSlice.actions;
