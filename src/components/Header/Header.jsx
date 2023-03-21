import styled from "styled-components";

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
                <li>Home</li>
                <li>Search</li>
                <li>About</li>
              </LiStyle>
            </ul>
          </nav>
        </header>
      </HeaderStyle>
    </>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15vh;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #ffc300;
  .pokeball {
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg");
    height: 5vh;
    width: 5vh;
  }
`;

const LiStyle = styled.ul`
  font-weight: 700;
  display: flex;
  flex-direction: row;
  gap: 18vh;
  list-style-type: none;
  font-size: 4vh;
`;
