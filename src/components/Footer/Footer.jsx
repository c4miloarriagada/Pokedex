import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

export const Footer = () => {
  return (
    <>
      <Container>
        <div className="footer">
          <img
            src="https://pa1.narvii.com/6744/5379b8b403828fe86852fcded8111e409762477a_hq.gif"
            alt=""
          />

          <a href="https://github.com/c4miloarriagada" target="_blank">
            {" "}
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/camilo-arriagada-vallejos/"
            target="_blank"
          >
            {" "}
            <BsLinkedin />
          </a>
        </div>
        <Text>
          <div className="text">
            <p>
              made with <AiFillHeart />
            </p>
          </div>
        </Text>
      </Container>
    </>
  );
};

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: start;
  color: #ffc300;
  font-weight: 900;
  height: 200px;
  width: 97.9%;
  position: relative;
  padding: 20px;
  margin-right: 20px;
  background-color: #2b3467;

  a {
    text-decoration: none;
    color: inherit;
    margin-right: 5px;
  }

  .footer {
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  img {
    width: 35px;
    height: 35px;
    margin-right: 5px;
  }
  .footer svg {
    height: 30px;
    width: 30px;
    margin-right: 5px;
  }
`;

const Text = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background-color: #2b3467;
  width: 100%;
  justify-content: center;
  .text {
    font-size: 11px;
    font-weight: 900;
    height: 100%;
    display: flex;
    align-items: end;
  }
  .text svg {
    fill: red;
    margin-left: 3px;
  }
`;
