import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  getPokemons,
  getPokemonsInfo,
} from "../../store/slices/pokemon/thunks";

import { Card } from "../../components/Card/Card";
import { Button } from "../../components/Button/Button";
import { pagesController } from "../../store/slices/pokemon/pokemonSlice";
import { CursorWait } from "../../components/CursorWait/CursorWait";
import { Carrousel } from "../../components/Carrousel/Carrousel";
import styled from "styled-components";
import { carrouselPhotoFilter } from "../../helpers/carrouselPhotosFilter";

export const PokemonGrid = () => {
  const { activePokemons, end, begin, isLoading, namePokemons } = useSelector(
    (state) => state.pokemons
  );

  const imgRef = useRef([]);
  const carrouselRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0, opacity: 0 });
  const [onMouse, setOnMouse] = useState(false);
  const [sprites, setSprites] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  useEffect(() => {
    if (!namePokemons) return;
    dispatch(getPokemonsInfo(namePokemons));
  }, [namePokemons, end, begin]);

  const handleMouseEnter = useCallback((event) => {
    const { clientY, clientX } = event;
    if (window.scrollY < 590) {
      setOnMouse(false);
      return;
    }
   const sprites = carrouselPhotoFilter(activePokemons, event.target.dataset.id)
    sprites &&  setSprites(sprites)
 
   setPosition({ x: clientX - 250, y: clientY + 500 });
    setOnMouse(true);
  },[position]);
  const handleMouseLeave = useCallback((event) => {
    if (window.scrollY < 590) {
      setOnMouse(false);
      return;
    }
    setOnMouse(false);
  }, [position]);

  const handleMove = useCallback((event) => {

    //  setPosition({ x: event.clientX - 100, y: event.clientY + 400   });
  }, []);

  const handleClick = (prop) => {
    dispatch(pagesController(prop));
  };


  return (
    <div>
      {isLoading && <CursorWait />}
      <Grid onMouseLeave={handleMouseLeave}>
        {onMouse && (
          <Carrousel
            sprites={sprites}
            ref={carrouselRef}
            left={position.x}
            top={position.y}
          />
        )}
        {activePokemons &&
          activePokemons.map((e, i) => (
            <Card
              onMouseMove={handleMove}
              key={e.id}
              id={e.id}
              ref={(el) => (imgRef.current[i] = el)}
              onMouseEnter={handleMouseEnter}
              name={e.name}
              url={e.sprites.front_default}
              height={e.height}
              weight={e.weight}
            />
          ))}
      </Grid>
      <Btn>
        <Button type={"-"} handleclick={() => handleClick("-")} />
        <Button type={"+"} handleclick={() => handleClick("+")} />
      </Btn>
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

const Btn = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 100px;
`;
