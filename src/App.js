// import logo from './logo.svg';
import "./App.css";
import NavBar from "./organisms/NavBar";
import Footer from "./molecules/MoleFooter/Footer";
// import Home from "./pages/Home";
// import Programming from "./pages/Programming";
// import Covid_19 from "./pages/Covid_19";
// import Saved from "./pages/Saved";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

function App() {
  return (
    <Container>
      <NavBar />
      <Footer />
      {/* <Home />
      <Programming />
      <Covid_19 />
      <Saved /> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export default App;
