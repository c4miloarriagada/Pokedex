import { useSelector } from 'react-redux'
import { PokemonGrid } from '../PokemonGrid/PokemonGrid'
import { PokemonInfo } from '../../components/PokemonInfo/PokemonInfo'
import styled from 'styled-components'
 
export const Main = () => {

  const { activePokemon } = useSelector((state)=> state.pokemons)



  return (
    <>  

      {activePokemon.length > 0 
       ? <PokemonInfo
       pokemonName={activePokemon[0]?.name}
       moves={activePokemon[0]?.moves}

       />
       :  <PokemonGrid/>
      }
    
    </>
  )
}

