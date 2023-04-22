import { useEffect } from "react"
import styled from "styled-components"

export const CursorWait = () => {

    useEffect(()=>{
        document.body.style.cursor = 'wait'
        return ()=>{
        document.body.style.cursor = 'auto'    
        }
    },[])

  return (
    <Loading>

    </Loading>
    
  )
}


const Loading = styled.div`
    background-image: url('http://clipart-library.com/image_gallery/n1582649.gif');
    background-position: center center;
    background-repeat: no-repeat;
    height:100%;
    width: 100%;

`