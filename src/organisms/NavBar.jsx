// import { useRef } from "react";
import { useState } from "react";
import NavLinks from "../molecules/MoleNavBar/NavLinks";
// import showNavbar from "../molecules/MoleNavBar/NavLinks";
import Home from "../pages/Home";
import Programming from "../pages/Programming";
import Covid19 from "../pages/Covid_19";
import Saved from "../pages/Saved";
// import SearchBar from "../molecules/MoleSearch/SearchBar";
import { Routes, Route } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const NavBar = () => {

  const [dataArray, setDataArray] = useState([]);
  const [dataObject, setDataObject] = useState({});
  return (
    <>
      <NavigasiBar>
        <NavLinks />
      </NavigasiBar>
      <Routes>
      <Route path="/" element={<Home
                dataArray={dataArray}
                setDataArray={setDataArray}
                dataObject={dataObject}
                setDataObject={setDataObject} />}
      />
      <Route path="/programming" element={<Programming
                dataArray={dataArray}
                setDataArray={setDataArray}
                dataObject={dataObject}
                setDataObject={setDataObject} />}
      />
      <Route path="/covid_19" element={<Covid19
                dataArray={dataArray}
                setDataArray={setDataArray}
                dataObject={dataObject}
                setDataObject={setDataObject} />}
      />
      <Route path="/saved" element={<Saved
                dataArray={dataArray}
                setDataArray={setDataArray}
                dataObject={dataObject}
                setDataObject={setDataObject} />}
      />
      </Routes>
    </>
  );
};

const NavigasiBar = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  top: 0;
  background-color: #DEECFF;
  z-index: 1;
  /* margin-top: 10px; */
  /* padding: 10px 0; */
  /* background-color: hotpink; */
`;

export default NavBar;

// const Hamburger = styled.div`
//   display: none;
//   flex-direction: column;
//   height: 20px;
//   justify-content: space-between;
//   position: relative;
//   /* background-color: hotpink; */
//   span:nth-child(2) {
//     transform-origin: 0 0;
//   }
//   span:last-child {
//     transform-origin: 0 100%;
//   }
//   /* atas ke bawah */
//   input:checked ~ span:nth-child(2) {
//     background-color: white;
//     transform: rotate(45deg) translate(-1px, -1px);
//   }
//   /* bawah ke atas */
//   input:checked ~ span:last-child {
//     background-color: white;
//     transform: rotate(-45deg) translate(-1px, 0);
//   }
//   input:checked ~ span:nth-child(3) {
//     opacity: 0;
//     transform: scale(0);
//   }
// `;

// const CheckBox = styled.input`
//   position: absolute;
//   width: 40px;
//   height: 28px;
//   left: -6px;
//   top: -3px;
//   opacity: 0;
//   cursor: pointer;
//   z-index: 2;
// `;

// const Garis = styled.span`
//   display: block;
//   width: 28px;
//   height: 3px;
//   background-color: rgb(234, 192, 255);
//   border-radius: 3px;
//   transition: all 0.5s;
//   background-color: black;
// `;

// const breakpoints = [576, 768];
// const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);


// <SearchBar />
// <Hamburger
//   css={{
//     [mq[0]]: {
//       display: "flex",
//     },
//   }}
// >
//   <CheckBox type="checkbox" onClick={showNavbar} />
//   <Garis></Garis>
//   <Garis></Garis>
//   <Garis></Garis>
// </Hamburger>