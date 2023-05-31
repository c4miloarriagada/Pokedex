import { forwardRef, useMemo, useState, memo } from "react";
import { useTransition, animated } from "react-spring";
import { GiDervishSwords } from "react-icons/gi";
import { RxDotFilled } from "react-icons/rx";
import { Button } from "../Button/Button";
import styled from "styled-components";

export const Carrousel = forwardRef(
  ({ top, left, sprites, onMouseLeave, onMouseMove, info }, ref) => {
    const [counter, setCounter] = useState(2);
    const style = useMemo(() => {
      return { top: top, left: left };
    }, [top, left]);

    const transitions = useTransition(sprites.slice(counter, counter + 3), {
      from: { transform: "scale(0)" },
      enter: { transform: "scale(1)" },
      leave: { transform: "scale(0)" },
      
    });

    const transitionAvatar = useTransition(sprites[1],{
      // from: { opacity: 0 },
      // enter: { opacity: 1 },
      // leave: { opacity: 0 },
      
      
    })

    const handleClick = (type) => {
      if (type === "-" && counter - 1 >= 2) {
        setCounter((prev) => prev - 1);
      }
      if (type === "+" && counter + 1 <= sprites.length / 2) {
        setCounter((prev) => prev + 1);
      }
    };

    return (
      <Container
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        ref={ref}
        style={style}
      >
        <div className="title-container">
          <div className="item avatar">
            {sprites && transitionAvatar((style, item)=>(
               <animated.img key={item} src={item} alt="" style={style} />
            ))}
            {/* <img src={sprites && sprites[1]} /> */}
          </div>
          <div className="item info">
            <h1>{sprites && sprites[0]}</h1>
            <h6>
              <GiDervishSwords /> &nbsp; Attacks:
            </h6>
            <ul>
              {info?.map((e, i) => (
                <li key={i * Math.random()}>
                  <RxDotFilled />
                  {e.ability.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="photo">
          {transitions((style, item) => (
            <animated.img key={item} src={item} alt="" style={style} />
          ))}
        </div>
        <div className="btn-container">
          <Button
            type={"-"}
            handleclick={() => handleClick(handleClick("-"))}
          />
          <Button
            type={"+"}
            handleclick={() => handleClick(handleClick("+"))}
          />
        </div>
      </Container>
    );
  }
);

const Container = styled.div`
  h1 {
    text-transform: capitalize;
    margin-bottom: 10px;
  }
  h1:first-letter {
    text-transform: uppercase;
  }
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #2b3467;
  color: #ffffff;
  height: 350px;
  width: 350px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border: 2px solid #aaa;
  border-radius: 8px;
  

  .title-container {
    display: flex;
    align-items: center;
    height: 190px;
  }
  ul {
    margin-top: 5px;
    list-style-type: none;
    display: flex; 
    flex-direction: column;
    font-size: 15px;
    align-items:flex-start;

  }
  ul li{
    text-transform: capitalize;
  }
  ul li svg{
    vertical-align: middle;
    color: #FFC300;
  }

  h6 {
    display: flex;
    align-items: center;
    font-size: 16px;

  }
  h6 svg {
    height: 30px;
    width: 30px;
  
  }
  .item{
    display:flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    
  }
  .item img {
  margin-top: 3px;
  margin-left: 25px;
  object-fit: contain;
  height:100%;
  width:100%;
  }

  .info{
    display:flex;
    flex-direction: column;
    align-items:center;
  }

  .avatar{
    width: 400px;
  }

  .photo {
    clip-path: inset(0);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: azure;
    height: 110px;
  }
  .photo img {
    background-color: #2b3467;
    height: 100px;
    width: 120px;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    align-items: end;
    background-color: #2b3467;
  }
`;
