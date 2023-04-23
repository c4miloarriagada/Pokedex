import { useSelector } from 'react-redux'
import { PokemonGrid } from '../PokemonGrid/PokemonGrid'
import { Footer } from '../../components/Footer/Footer'
import styled from 'styled-components'
 
export const Main = () => {

  const { activePokemon } = useSelector((state)=> state.pokemons)


  return (
    <>  
    <Container>
      {activePokemon.length > 0 
       ? <div>WIP</div>
       :  <PokemonGrid/>
      }
      
        <Footer/>
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
