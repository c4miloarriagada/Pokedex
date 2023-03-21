import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./slices/pokemon";

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
