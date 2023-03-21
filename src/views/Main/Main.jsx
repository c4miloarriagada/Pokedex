import { Title } from '../../components/Title/Title'
import { PokemonGrid } from '../PokemonGrid/PokemonGrid'
import { Banner } from '../../components/Banner/Banner'

import styled from 'styled-components'
 
export const Main = () => {
  return (
    <>  
    <Container>
        <Banner/>
        <PokemonGrid/>
    </Container>
    </>
  )
}

const Container = styled.div`
  flex-direction: column;
  height: 1500px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

`;

const TitleStyle = styled.h2`
  
`