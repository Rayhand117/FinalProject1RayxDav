// import logo from './logo.svg';
import "./App.css";
import NavBar from "./organisms/NavBar";
import Footer from "./molecules/MoleFooter/Footer";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

function App() {
  return (
    <Container>
      <NavBar />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export default App;
