import styled from "styled-components";

export const Button = ({ type, handleclick }) => {
  return (
    <ButtonStyle>
      <div>
        <button onClick={handleclick}>{type}</button>
      </div>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;

  button {
    height: 25px;
    width: 30px;
    background-color: #ffffff;
    justify-content: center;
    color: #3ab0ff;
    transform: skew(-15deg);
    border:none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  button:hover{
    cursor: pointer;
    background-color: #3AB0FF;
    color: #ffffff;
   
   }

`;
