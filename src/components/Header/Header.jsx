import styled from "styled-components";
import { Input } from "../Input/Input";

export const Header = () => {
  return (
    <>
      <HeaderStyle>
        <header>
          <nav>
            <ul>
              <LiStyle>
                <li>
                  {" "}
                  <div className="pokeball"></div>
                </li>
                <li><Input/></li>
        
              </LiStyle>
            </ul>
          </nav>
        </header>
      </HeaderStyle>
    </>
  );
};

const HeaderStyle = styled.header`
  position:sticky;
  background-color: #BAD7E9;
  z-index: 2;
  top: 0px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90px;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #ffc300;
  .pokeball {
    background-image: url("https://res.cloudinary.com/dwtkwakbc/image/upload/v1682265450/flat_1000x1000_075_f-removebg-preview_ajvpkk.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 40px;
    width: 60px;
  }
`;

const LiStyle = styled.ul`
  font-weight: 700;
  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style-type: none;

  li{
    cursor: pointer;
  }
`;
