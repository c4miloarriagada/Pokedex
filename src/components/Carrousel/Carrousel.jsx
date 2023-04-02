import { forwardRef, useMemo, useState } from "react";
import { Button } from "../Button/Button";
import styled from "styled-components";

export const Carrousel = forwardRef(
  ({ top, left, sprites, onMouseLeave, onMouseMove }, ref) => {
    const [counter, setCounter] = useState(2);
    const style = useMemo(() => {
      return { top: top, left: left };
    }, [top, left]);

    const handleClick = () => {};

    return (
      <Container
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        ref={ref}
        style={style}
      >
        <div className="title-container">
          <div className="item">
            <img src={sprites && sprites[1]} />
          </div>
          <div className="item">
            <h1>{sprites && sprites[0]}</h1>
          </div>
        </div>
        <div className="photo">
          <img src={sprites && sprites[counter + 1]} alt="" />
          <img src={sprites && sprites[counter]} alt="" />
          <img src={sprites && sprites[counter + 2]} alt="" />
        </div>
        <div className="btn-container">
          <Button
            type={"-"}
            handleclick={() => handleClick(setCounter((prev) => prev - 1))}
          />
          <Button
            type={"+"}
            handleclick={() => handleClick(setCounter((prev) => prev + 1))}
          />
        </div>
      </Container>
    );
  }
);

const Container = styled.div`
  h1 {
    margin-top: 10px;
    text-transform: capitalize;
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
  width: 300px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border: 2px solid #aaa;
  border-radius: 8px;
  .title-container {
    padding: 20px;
    display: flex;
    overflow: hidden;
    align-items: end;
  }

  .item img {
    max-width: 80%;
    object-fit: cover;
  }

  .photo {
    clip-path: inset(0);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: azure;
    height: 40%;
  }

  .photo img {
    background-color: #2b3467;
    height: 120px;
    width: 120px;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: end;
    background-color: #2b3467;
  }
`;
