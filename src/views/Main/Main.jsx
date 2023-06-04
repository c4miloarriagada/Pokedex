import { useSelector } from 'react-redux'
import { PokemonGrid } from '../PokemonGrid/PokemonGrid'
import { useEffect, useState } from 'react'
import { PokemonInfo } from '../../components/PokemonInfo/PokemonInfo'

 
export const Main = () => {

  const { activePokemon } = useSelector((state)=> state.pokemons)
  const [sprites, setSprites] = useState({})
  const [counter, setCounter] = useState(0)

  useEffect(()=>{
    if(activePokemon.length === 0) return
    setSprites({
       0 : activePokemon[0].sprites.front_default,
       1: activePokemon[0].sprites.back_default,
       2: activePokemon[0].sprites.front_shiny,
       3: activePokemon[0].sprites.back_shiny
    })
  },[activePokemon])

  const handleClick = (tipo) => {
   if(tipo === '+'){
    setCounter((prev) => prev < 3 ? prev + 1 : prev)
   }else{
    setCounter((prev) => prev !== 0 ? prev - 1 : prev )
   }

  }


  return (
    <>  

      {activePokemon.length > 0 
       ? <PokemonInfo
        pokemonName={activePokemon[0]?.name}
        moves={activePokemon[0]?.moves}
        handleClick={handleClick}
        sprites={sprites[counter]}
       />
       :  <PokemonGrid/>
      }
 
    </>
  )
}

