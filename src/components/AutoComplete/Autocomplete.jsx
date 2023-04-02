import React from "react";
import styled from "styled-components";

export const Autocomplete = ({ onClick, pokemons }) => {
  return (
    
    <AutocompleteStyle>
        <li  onClick={ onClick }> <div className="container"><div className="liPokeball"></div><p>{ pokemons }</p>  </div> </li>
    </AutocompleteStyle>
  );
};



const AutocompleteStyle = styled.ul`
    list-style:none;
    background-color: #FCFFE7;
    
    li:hover{
      background-color: #BAD7E9;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      
    }

    p::first-letter{
      text-transform: uppercase;
    }

    .container{
      display:flex;
      align-items: center;
    }

    .liPokeball{
      margin-left: 10px;
      margin-right: 10px;
      background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg");
      height: 2vh;
      width: 2vh;
    }

`

