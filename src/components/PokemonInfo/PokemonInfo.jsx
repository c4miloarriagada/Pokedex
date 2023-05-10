import React, { useCallback, useState } from "react";
import { TypeWriter } from "../TypeWriter/TypeWriter";
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";
import { GiPunchBlast } from "react-icons/gi";
import styled from "styled-components";

export const PokemonInfo = ({ pokemonName, moves }) => {
  const [cssPropsScroll, setcssPropsScroll] = useState({
    backgroundColor: "",
    animation: "",
    flag: false,
    border: "",
    thumb: "#888",
    scrollbar: "#f2f2f2",
  });
  const handleClick = () => {
    console.log("hola");
  };

  const handleScroll = useCallback(() => {
    if (!cssPropsScroll.flag) {
      setcssPropsScroll({
        backgroundColor: "#888",
        animation: "fadeIn",
        flag: true,
        border: "0px",
        thumb: "#f2f2f2",
        scrollbar: "#888",
      });
    }
  }, []);
  return (
    <section>
      <Container>
        <Title>
          <TypeWriter text={pokemonName} />
        </Title>
        <LedPokedex />
        {ledCssProps?.map(({ animation, shadow, color, top, left }, index) => (
          <Leds
            key={index}
            animation={animation}
            shadow={shadow}
            color={color}
            top={top}
            left={left}
          />
        ))}
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
        <ButtonsContainer>
          <span onClick={() => handleClick()}>
            <FaRegMinusSquare />
          </span>
          <span>
            <FaRegPlusSquare />
          </span>
        </ButtonsContainer>
        <InfoContainer
          onScroll={handleScroll}
          backgroundColor={cssPropsScroll.backgroundColor}
          animation={cssPropsScroll.animation}
          border={cssPropsScroll.border}
          thumbBackground={cssPropsScroll.thumb}
          scrollbarBackground={cssPropsScroll.scrollbar}
        >
          <div className="sticky-bar">
            <h2>
              Moves <GiPunchBlast />
            </h2>
          </div>
          <ul>
            {moves &&
              moves.map(({ move }, i) => (
                <li key={i}>{<TypeWriter text={move.name} />}</li>
              ))}
          </ul>
        </InfoContainer>
      </Container>
    </section>
  );
};

const ledCssProps = [
  {
    animation: "red",
    shadow: "#fe0000",
    color: "#d11d31",
    left: "179px",
    top: "132px",
  },
  {
    animation: "yellow",
    shadow: "#f3fb26",
    color: "#969030",
    left: "207px",
    top: "132px",
  },
  {
    animation: "green",
    shadow: "#d4f722",
    color: "#84c241",
    left: "234px",
    top: "132px",
  },
];

const ButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  height: 20px;
  width: 100px;
  top: 614px;
  left: 282px;
  align-items: center;
  justify-content: space-evenly;

  span {
    height: 100%;
    width: 100%;
    color: rgb(186, 215, 233);
  }
  span:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 800px;
  z-index: 1;
  animation: fadeIn 1s ease-in-out;

  img {
    height: 700px;
    width: 700px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LedPokedex = styled.div`
  position: absolute;
  height: 80px;
  width: 60px;
  left: 110px;
  top: 130px;
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

const CarrouselContainer = styled.div`
  background-color: #f4f4f4;
  height: 220px;
  width: 220px;
  position: absolute;
  left: 130px;
  top: 290px;
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

const InfoContainer = styled.aside`
  width: 210px;
  height: 95px;
  position: absolute;
  top: 325px;
  left: 471px;
  display: flex;
  overflow: auto;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 5px;
  svg {
    color: #f3fb26;
  }
  h2 {
    background-image: linear-gradient(to right, #fe3300, #f3fb26);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  p {
    margin-top: 4px;
    background-image: linear-gradient(to right, #26c9fb, #ffffff);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    list-style: none;
  }

  ul li {
    font-weight: 700;
    margin-left: 9px;
  }

  &::-webkit-scrollbar {
    width: 7px;
    border-radius: 5px;
    border-top-left-radius: ${(props) => props.border};
    background-color: ${(props) => props.scrollbarBackground};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.thumbBackground};
    border-radius: 5px;
    height: 50px;
  }

  .sticky-bar {
    position: sticky;
    top: 0;
    background-color: ${(props) => props.backgroundColor};
    animation: ${(props) => props.animation} 1s ease-in-out;
  }

  h2 {
    animation: none;
  }

  @keyframes ${(props) => props.animation} {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Title = styled.h2`
  background-image: linear-gradient(to right, #f3fb26, #d11d31);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  text-transform: capitalize;
  font-size: 3rem;
  margin-top: 1rem;
`;
