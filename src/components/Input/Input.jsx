import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { Autocomplete } from "../AutoComplete/Autocomplete";
import { autoComplete } from "../../helpers/autoComplete";
import { FaSearch } from 'react-icons/fa';
import styled from "styled-components";

export const Input = () => {
  const { formState, onInputChange, onResetForm, onAutoComplete } = useForm({});

  const { inputSearch } = formState;

  const { namePokemons } = useSelector((state) => state.pokemons);

  const { pokemon } = autoComplete(namePokemons, inputSearch);

  const [focus, setFocus] = useState(false);

  const handleClick = (pokemonName) => {
    onAutoComplete(formState, "inputSearch", pokemonName);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };
  return (
    <InputStyle>
      <div className="input-container">
  
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="off"
          name="inputSearch"
          value={inputSearch || ""}
          onChange={onInputChange}

        />
        {pokemon?.length > 1 && (
          <div className="autocomplete-container">
            {pokemon.map((e) => (
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
        <span>Search</span>
      </div>
      <div className="reset">
        <span onClick={onResetForm}>Reset</span>
      </div>
    </InputStyle>
  );
};

const InputStyle = styled.div`
  position:;
  display:flex;
  font-size: 1.5vh;
  
  input {
    
    border: 2px solid black;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    height: 28px;
    border-color: #FCFFE7;
    border-width: 5px;
    padding:  0 10px;
    width: 300px;
    transform: skew(-15deg);
  }

  input:focus {
    outline: none;
    border-color: #EB455F;
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
    right: 15px;
    position: absolute;
    z-index: 1;
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
    display: flex;
    flex-direction: column;
  }


  .reset{
    display:flex;
    margin-left: 7px;
    align-items: end;
    transform: skew(-15deg);
    color: #ffffff;
    
    
  }
  .reset:hover{
    color: #2B3467;
    transform: skew(-25deg);
  }

  .search{
    display:flex;
    margin-left : 15px;
    align-items: center;
    background-color: #ffffff;
    justify-content:center;
    width: 50px;
    color:#3AB0FF;
    transform: skew(-15deg);
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
   }

   .search:hover{
    background-color: #3AB0FF;
    color: #ffffff;
   
   }

`;
