import { forwardRef, memo } from "react";
import { GiDiplodocus, GiAnvil } from "react-icons/gi";
import styled from "styled-components";

export const Card = memo(forwardRef(
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
      isLoading,
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
          {isLoading ? (
            <img className="loader" src="https://i.gifer.com/1V94.gif" />
          ) : (
            <>
              <h2>{nameCap}</h2>
              <img src={url} alt={name} data-id={id}      onMouseEnter={onMouseEnter}/>
              <ul>
                <li>
                  {" "}
                  <GiDiplodocus /> Height : {height} ft
                </li>
                <li>
                  {" "}
                  <GiAnvil /> Weight : {weight} lbs
                </li>
              </ul>
            </>
          )}
        </div>
      </Container>
    );
  }
));

const Container = styled.div`
  cursor: pointer;
  display: flex;
  height: 200px;
  background-color: #bad7e9;
  margin-bottom: 0;
  width: 250px;
  justify-self: center;
  justify-content: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  align-items: center;
  border-radius: 20px;
  ul {
    list-style-type: none;
  }

  li {
    display: flex;
    align-items: center;
  }

  li svg {
    fill: #2b3467;
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
  h2 {
    margin-top: 10px;
  }
  .loader {
    height: 150px;
  }
`;
