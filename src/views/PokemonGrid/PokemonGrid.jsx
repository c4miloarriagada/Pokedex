import { useDispatch, useSelector } from "react-redux";
import { createRef, useCallback, useEffect, useRef } from "react";
import {
  getPokemons,
  getPokemonsInfo,
} from "../../store/slices/pokemon/thunks";

import { Card } from "../../components/Card/Card";
import styled from "styled-components";

export const PokemonGrid = () => {
  const { namePokemons } = useSelector((state) => state.pokemons);
  const { activePokemons } = useSelector((state) => state.pokemons);
  const { end } = useSelector((state) => state.pokemons);
  const { begin } = useSelector((state) => state.pokemons);
  const imgRef = useRef([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  useEffect(() => {
    if (!namePokemons) return;
    dispatch(getPokemonsInfo(namePokemons));
  }, [namePokemons]);

  const handleMouseEnter = useCallback(({ target }) => {
    let id = parseInt(target.id);
    let img = imgRef.current.filter((e) => parseInt(e.id) === id);
    if (!img[0]?.classList[0] === "img") return;

    if (!img[0]) return;

    let pokemon = activePokemons.filter((e) => e.id === id);

    img[0].style.backgroundImage = `url(${pokemon[0].sprites.back_default})`;
  },[activePokemons, imgRef]);

  const handleMouseLeave = useCallback(({ target }) => {
    let id = parseInt(target.id);

    let img = imgRef.current.filter((e) => parseInt(e.id) === id);

    if (!img[0]) return;

    let pokemon = activePokemons.filter((e) => e.id === id);

    img[0].style.backgroundImage = `url(${pokemon[0].sprites.front_default})`;
  },[activePokemons, imgRef]);

  return (
    <div>
      <Grid>
        {activePokemons &&
          activePokemons.map((e, i) => (
            <Card
              key={e.id}
              id={e.id}
              ref={(el) => (imgRef.current[i] = el)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              name={e.name}
              url={e.sprites.front_default}
              height={e.height}
              weight={e.weight}
            />
          ))}
      </Grid>
      {/* <button onClick={ () => dispatch(pagesController('+')) }>+</button>
        <button onClick={ ()=> dispatch(pagesController('-')) }>-</button> */}
    </div>
  );
};

const Grid = styled.div`
  margin-top: 10vh;
  gap: 10px;
  height: 1000px;
  width: 1100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-content: space-evenly;
  align-items: center;
`;
