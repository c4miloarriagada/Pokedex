import { useCallback, useEffect, useRef, useState,memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  getPokemonsInfo,
} from "../../store/slices/pokemon/thunks";
import { Card } from "../../components/Card/Card";
import { Button } from "../../components/Button/Button";
import { pagesController } from "../../store/slices/pokemon/pokemonSlice";
import { Carrousel } from "../../components/Carrousel/Carrousel";
import { carrouselPhotoFilter } from "../../helpers/carrouselPhotosFilter";
import styled from "styled-components";

export const PokemonGrid = memo(() => {
  const { activePokemons, end, begin, isLoading, namePokemons } = useSelector(
    (state) => state.pokemons
  );

  const imgRef = useRef([]);
  const carrouselRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0, opacity: 0 });
  const [onMouse, setOnMouse] = useState(false);
  const [sprites, setSprites] = useState([])
  const dispatch = useDispatch();
  const [info, setInfo] = useState([])

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  useEffect(() => {
    if (!namePokemons) return;
    dispatch(getPokemonsInfo(namePokemons));
  }, [end, begin]);

  const handleMouseEnter = useCallback((event) => {
    const { clientY, clientX } = event;
    if (window.scrollY < 0) {
      setOnMouse(false);
      return;

    }
   const data = carrouselPhotoFilter(activePokemons, event.target.dataset.id)

   data &&  setSprites(data?.sprites[0])
   
   data && setInfo(data?.abilities[0])
  
   setPosition({ x: clientX , y: clientY });

    setOnMouse(true);

  },[carrouselRef.current]);



  const handleMouseLeave = useCallback(() => {
    setOnMouse(false);
  },[carrouselRef.current]);

  const handleMove = useCallback(() => { 
    setOnMouse(true);
  },[carrouselRef.current])

  const handleClick = (prop) => {
    dispatch(pagesController(prop));
  };  


  return (
    <Container>
        {onMouse && (
          <Animation>
            <Carrousel
              info={info}
              sprites={sprites}
              ref={carrouselRef}
              left={position.x}
              top={position.y}
              onMouseMove={handleMove}
              onMouseLeave={handleMouseLeave}
            />
          </Animation>
        )}
      <Grid >
        {activePokemons &&
          activePokemons.map((e, i) => (
            <Card
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMove}
              key={e.id}
              id={e.id}
              ref={(el) => (imgRef.current[i] = el)}
              onMouseEnter={handleMouseEnter}
              name={e.name}
              url={e.sprites.front_default}
              height={e.height}
              weight={e.weight}
              isLoading={isLoading}
            />
          ))}
      </Grid>
      <Btn>
        <Button type={"-"} handleclick={() => handleClick("-")} />
        <Button type={"+"} handleclick={() => handleClick("+")} />
      </Btn>
    </Container>
  );
});

const Animation = styled.div`
  animation: fadeIn 1s ease-in-out;
  
  @keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
  }
`

const Container = styled.section`
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0;
}
`
const Grid = styled.section`
  margin-top: 20px;
  gap: 10px;
  max-width: 990px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  justify-content: space-evenly;
  align-items: center;
  animation: fadeIn 1s ease-in-out;
  
  @keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
  }
`;

const Btn = styled.div`
  display: flex;
  width: 100%;
  margin-top: 45px;
  justify-content: space-around;
  height: 80px;
  
 
`;

