import React from "react";
import { TypeWriter } from "../TypeWriter/TypeWriter";
import styled from "styled-components";



export const PokemonInfo = () => {


  return (
    <Container>
      <LedPokedex/>
      { ledCssProps?.map(({ animation, shadow, color, top, left }, index) => (
        <Leds
          key={index}
          animation={animation}
          shadow={shadow}
          color={color}
          top={top}
          left={left}
        />
      )) }
      <div>
        <img
          src="https://res.cloudinary.com/dwtkwakbc/image/upload/v1682743439/Trending_-_Pokedex_Png__Transparent_Png_1690x1207__-_PinPng-removebg-preview_epmwea.png"
          alt=""
        />
      </div>
      <CarrouselContainer>
        <div className="carrousel-div">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
            alt=""
          />
        </div>
      </CarrouselContainer>
    </Container>
  );
};

const ledCssProps = [
    {
      animation: "red",
      shadow: "#fe0000 ",
      color: "#d11d31",
      left: "179px",
      top: "57px",
    },
    {
      animation: "yellow",
      shadow: "#f3fb26",
      color: "#969030",
      left: "207px",
      top: "57px",
    },
    {
      animation: "green",
      shadow: "#d4f722",
      color: "#84c241",
      left: "234px",
      top: "57px",
    }
  ];

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 700px;
  width: 800px;
  box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.5),
    -5px 0 5px -5px rgba(0, 0, 0, 0.5);
  background-color: rgb(186, 215, 233);
  z-index: -3;
  img {
    height: 700px;
    width: 700px;
  }
`;

const LedPokedex = styled.div`
  position: absolute;
  height: 80px;
  width: 60px;
  left: 110px;
  top: 56px;
  border-radius: 70%;
  outline: none;
  animation: shine 2s infinite;
  z-index: 2;
  @keyframes shine {
    0% {
      box-shadow: 0 0 10px 5px #ffffff;
    }

    50% {
      box-shadow: 0 0 20px 10px #ffffff;
    }

    100% {
      box-shadow: 0 0 10px 5px #ffffff;
    }
  }
`;

const Leds = styled.div`
  height: 22px;
  position: absolute;
  width: 17px;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  border-radius: 90%;
  z-index: 1;
  animation: ${(props) => props.animation} 1s infinite;

  @keyframes ${(props) => props.animation} {
    from {
      background-color: ${(props) => props.color};
    }
    50% {
      background-color: ${(props) => props.color};
      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 15px 1px,
        inset ${(props) => props.shadow} 0 -1px 9px,
        ${(props) => props.color} 0 2px 0;
    }
    to {
      background-color: ${(props) => props.color};
    }
  }
`;

const CarrouselContainer = styled.main`
  background-color: #f4f4f4;
  height: 220px;
  width: 220px;
  position: absolute;
  left: 130px;
  top: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;

  .carrousel-div {
    height: 80%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carrousel-div img {
    height: 100%;
    width: 100%;
  }
`;
