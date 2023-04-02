import { forwardRef } from "react";
import styled from "styled-components";

export const Card = forwardRef(
  (
    {
      id,
      name,
      url,
      weight,
      height,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onClick,
    },
    ref
  ) => {
    let nameCap = name.charAt(0).toUpperCase() + name.slice(1);

    return (
      <Container
        ref={ref}
        onClick={onClick}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        data-id={id}
      >
        <div data-id={id}>
          <h2>{nameCap}</h2>

          <img  src={url} alt={name} />

          <ul>
            <li >Height : {height} ft</li>
            <li >Weight : {weight} lbs</li>
          </ul>
        </div>
      </Container>
    );
  }
);

const Container = styled.div`
  cursor: pointer;
  display: flex;
  height: 80%;
  background-color: #bad7e9;
  margin-bottom: 0;
  width: 300px;
  justify-self: center;
  justify-content: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  h2 {
    margin-top: 10px;
  }
`;
