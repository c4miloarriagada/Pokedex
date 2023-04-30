import { useSelector } from 'react-redux'
import { PokemonGrid } from '../PokemonGrid/PokemonGrid'
import { Footer } from '../../components/Footer/Footer'
import { PokemonInfo } from '../../components/PokemonInfo/PokemonInfo'
import styled from 'styled-components'
 
export const Main = () => {

  const { activePokemon } = useSelector((state)=> state.pokemons)


  return (
    <>  
    <Container>
      {activePokemon 
       ? <PokemonInfo/>
       :  <PokemonGrid/>
      }
      
      
    </Container>
    </>
  )
}

const Container = styled.div`
  flex-direction: column;
  display: flex;
  text-align: center;
  align-items: center;

`;
