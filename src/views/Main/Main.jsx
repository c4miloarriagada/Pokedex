import { Title } from '../../components/Title/Title'
import { PokemonGrid } from '../PokemonGrid/PokemonGrid'
import { Banner } from '../../components/Banner/Banner'

import styled from 'styled-components'
import { Footer } from '../../components/Footer/Footer'
 
export const Main = () => {
  return (
    <>  
    <Container>
        <PokemonGrid/>
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
