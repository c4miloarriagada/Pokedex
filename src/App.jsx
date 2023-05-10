import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./views/Main/Main";
import styled from "styled-components";

export const App = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default App;

const Container = styled.main`
  flex-direction: column;
  display: flex;
  text-align: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
