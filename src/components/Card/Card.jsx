import { forwardRef } from 'react';
import styled from "styled-components"

export const Card = forwardRef(({ id , name , url, weight, height, onMouseEnter, onMouseLeave, onClick }, ref) => {

  let nameCap = name.charAt(0).toUpperCase() + name.slice(1)

  return (  
    <Container imageUrl= { url } >
    <div  
          onClick={onClick}
          onMouseLeave={  onMouseLeave }
          onMouseEnter={ onMouseEnter }>
      <h2>{ nameCap }</h2> 
      <div  ref={ref}  id={id} className="img">
      </div>
      <ul>
        <li>
            Height : { height } ft
        </li>
        <li>
            Weight : { weight } lbs
        </li>
      </ul> 
    </div>
    </Container>

    
  )
})

const Container = styled.div`
  cursor: pointer;
  display: flex;
  height: 80%;
  background-color: beige;
  margin-bottom: 0;
  width: 300px;
  justify-self: center;
  justify-content: center;

   h2{
    margin-top: 10px;
   }

  .img{
    
    background-image: url(${props => props.imageUrl});
    background-size: cover ;
    background-position: center;

    height: 50%;
  }
  .img:hover {
    transform: scale(1.1); /* Aquí se aplica el zoom en la imagen */
  }

  .active{
    background-color: black;
  }

`



