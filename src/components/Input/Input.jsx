import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { Autocomplete } from "../AutoComplete/Autocomplete";
import { autoComplete } from "../../helpers/autoComplete";
import { getPokemon } from "../../store/slices/pokemon/thunks";
import styled from "styled-components";

export const Input = () => {
  const { formState, onInputChange, onResetForm, onAutoComplete } = useForm({});

  const { inputSearch } = formState;

  const { namePokemons } = useSelector((state) => state.pokemons);

  const { pokemon } = autoComplete(namePokemons, inputSearch);

  const [focus, setFocus] = useState(false);

  const dispatch = useDispatch()

  const handleClick = (pokemonName) => {
    onAutoComplete(formState, "inputSearch", pokemonName);
    setFocus(false)
  };

  const handleSearch = () => {
   dispatch(getPokemon(inputSearch))
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    // setFocus(false);
  };
  return (
    <InputStyle pokemonLenght = {pokemon?.length}>
      <div className="input-container">
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="off"
          name="inputSearch"
          value={inputSearch || ""}
          onChange={onInputChange}
        />
        {focus && (
          <div className="autocomplete-container">
            {pokemon?.map((e) => (
              <Autocomplete
                onClick={() => handleClick(e)}
                key={e}
                pokemons={e}
              />
            ))}
          </div>
        )}
      </div>
      <div className="search">
        <span onClick={() => handleSearch()}>Search</span>
      </div>
      <div className="reset">
        <span onClick={onResetForm}>Reset</span>
      </div>
    </InputStyle>
  );
};

const InputStyle = styled.div`
  position: relative;
  display: flex;
  font-size: 15px;

  input {
    border: 2px solid black;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    height: 28px;
    border-color: #fcffe7;
    border-width: 5px;
    padding: 0 10px;
    width: 300px;
    transform: skew(-15deg);
  }

  input:focus {
    outline: none;
    border-color: #eb455f;
  }

  label {
    border: 2px solid rgb(255, 195, 0);
    background-color: #ffffff;
    position: relative;
    right: 175px;
    bottom: 12px;
    font-weight: 700;
    height: 50px;
    transition: all 0.3s ease-in-out;
  }
  label.focused {
    border-color: rgb(228, 0, 15);
    bottom: 90px;
  }

  .input-container {
    position: relative;
  }

  .autocomplete-container {
    transform: skew(-15deg);
    right: ${({ pokemonLenght }) => pokemonLenght <= 2 ? 7: 15}px;
    position: absolute;
    z-index: 1;
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .reset {
    display: flex;
    margin-left: 7px;
    align-items: end;
    transform: skew(-15deg);
    color: #ffffff;
  }
  .reset:hover {
    color: #2b3467;
    transform: skew(-25deg);
  }

  .search {
    display: flex;
    margin-left: 15px;
    align-items: center;
    background-color: #ffffff;
    justify-content: center;
    width: 50px;
    color: #3ab0ff;
    transform: skew(-15deg);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .search:hover {
    background-color: #3ab0ff;
    color: #ffffff;
  }
`;
