import { useSelector } from 'react-redux'
import { PokemonGrid } from '../PokemonGrid/PokemonGrid'
import { PokemonInfo } from '../../components/PokemonInfo/PokemonInfo'
import styled from 'styled-components'
 
export const Main = () => {

  const { activePokemon } = useSelector((state)=> state.pokemons)



  return (
    <>  
    <Container>
      {activePokemon.length > 0 
       ? <PokemonInfo
       pokemonName={activePokemon[0]?.name}
       moves={activePokemon[0]?.moves}

       />
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
