/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Programming from "../pages/Programming";
import Covid19 from "../pages/Covid_19";
import Search from "../pages/Search";
import Saved from "../pages/Saved";
import NavLogo from "../atoms/AtomNavBar/NavLogo";
import NavHome from "../atoms/AtomNavBar/NavHome";
import NavProgramming from "../atoms/AtomNavBar/NavProgramming";
import NavCovid_19 from "../atoms/AtomNavBar/NavCovid_19";
import NavSaved from "../atoms/AtomNavBar/NavSaved";
import axios from "axios";
import logoCari from "../assets/cari.svg"

const NavBar = () => {
  const [dataArray, setDataArray] = useState([]);
  const [dataObject, setDataObject] = useState({});
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const searchNews = async () => {
    setLoading(true);
    navigate("/search");
    try {
      const { data: { articles }, } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}everything?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setData(articles);
      setLoading(false);
    } catch (error) {
      setData([]);
      setLoading(false);
    }
  };

  const handleKeyPress = e => {
    if(e.keyCode === 13) {
      searchNews()
    }
  }

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("slide");
  };

  return (
    <>
      <NavigasiBar>
        <Navigator>
          <NavLogo />
          <Navigasi
            ref={navRef}
            css={{
              [mq[0]]: {
                position: "absolute",
                right: 0,
                top: -1,
                paddingTop: 300,
                height: "100vh",
                width: "100vw",
                justifyContent: "spaceEvenly",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(10px)",
                zIndex: 5,
                transform: "translateX(100%)",
                transition: "all 1s",
                opacity: 0,
              },
            }}
          >
            <NavHome />
            <NavProgramming />
            <NavCovid_19 />
            <NavSaved />
            <style>
              {`
              nav nav.slide {
                opacity: 1;
                transform: translateX(0);
              }
            `}
            </style>
          </Navigasi>
        </Navigator>
        <ForSearch>
          <InputSearch
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Covid-19"
            onKeyUp={handleKeyPress}
          />
          <TombolSearch
            type="button"
            aria-label="search"
            onClick={() => searchNews()}
          >
            <img src={logoCari} alt="Sv" />
          </TombolSearch>
        </ForSearch>
        <Hamburger
          css={{
            [mq[0]]: {
              display: "flex",
            },
          }}
        >
          <CheckBox type="checkbox" onClick={showNavbar} />
          <Garis></Garis>
          <Garis></Garis>
          <Garis></Garis>
        </Hamburger>
      </NavigasiBar>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              dataArray={dataArray}
              setDataArray={setDataArray}
              dataObject={dataObject}
              setDataObject={setDataObject}
            />
          }
        />
        <Route
          path="/programming"
          element={
            <Programming
              dataArray={dataArray}
              setDataArray={setDataArray}
              dataObject={dataObject}
              setDataObject={setDataObject}
            />
          }
        />
        <Route
          path="/covid_19"
          element={
            <Covid19
              dataArray={dataArray}
              setDataArray={setDataArray}
              dataObject={dataObject}
              setDataObject={setDataObject}
            />
          }
        />
        <Route path="/saved" element={<Saved dataArray={dataArray} />} />
        <Route
          path="/search"
          element={
            <Search
              dataArray={dataArray}
              setDataArray={setDataArray}
              dataObject={dataObject}
              setDataObject={setDataObject}
              data={data}
              loading={loading}
            />
          }
        />
      </Routes>
    </>
  );
};

const FlexRow = css`
  display: flex;
  flex-direction: row;
`;

const FlexCentered = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// NAVIGASI ----------------------------------------------------
const NavigasiBar = styled.nav`
  position: fixed;
  ${FlexRow};
  width: 100%;
  justify-content: space-around;
  align-items: center;
  top: 0;
  background-color: #deecff;
  z-index: 1;
`;

const Navigator = styled.div`
  ${FlexRow};
  top: 0;
  padding: 10px 0;
`;

const Navigasi = styled.nav`
  font-size: 20px;
  ${FlexRow};
  align-items: center;
  a {
    color: hsl(240, 29.41176470588236%, 10%);
    ${FlexCentered}
    padding: 4px 16px 4px 16px;
    margin: 0 10px;
    font-weight: 700;
  }
  a.active {
    background-color: #c6cfff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 4px 16px 4px 16px;
    text-align: center;
  }
  @media (max-width: 576px) {
    a {
      padding: 4px 33vw;
    }
    a.active {
      color: white;
      background-color: #0c0c0e;
      padding: 4px 33vw;
    }
  }
`;

// HAMBURGER ----------------------------------------------------
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  height: 20px;
  justify-content: space-between;
  position: relative;
  z-index: 5;
  span:nth-of-type(1) {
    transform-origin: 0 0;
  }
  span:last-of-type {
    transform-origin: 0 100%;
  }
  /* atas ke bawah */
  input:checked ~ span:nth-of-type(1) {
    background-color: black;
    transform: rotate(45deg) translate(-1px, -1px);
  }
  /* bawah ke atas */
  input:checked ~ span:last-of-type {
    background-color: black;
    transform: rotate(-45deg) translate(-1px, 0);
  }
  input:checked ~ span:nth-of-type(2) {
    opacity: 0;
    transform: scale(0);
  }
`;

const CheckBox = styled.input`
  position: absolute;
  width: 40px;
  height: 28px;
  left: -6px;
  top: -3px;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
`;

const Garis = styled.span`
  display: block;
  width: 28px;
  height: 3px;
  background-color: rgb(234, 192, 255);
  border-radius: 3px;
  transition: all 0.5s;
  background-color: black;
`;

const breakpoints = [877, 950];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);


// SEARCH BAR ----------------------------------------------------
const ForSearch = styled.div`
  ${FlexRow};
`;

const TombolSearch = styled.button`
  width: 35px;
  height: 35px;
  ${FlexCentered}
  background-color: rgb(255, 255, 255);
  border-right: 2px solid #000000;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  border-left: 0px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;

const InputSearch = styled.input`
  display: block;
  width: 100%;
  height: 35px;
  padding: 0 12px;
  background-color: rgb(255, 255, 255);
  border-left: 2px solid #000000;
  border-top: 2px solid #000000;
  border-right: 0;
  border-bottom: 2px solid #000000;
  border-radius: 5px 0 0 5px;
  outline: none;
  ::placeholder {
    color: hsla(216, 9%, 21%, 0.46);
    font-weight: 400;
    font-size: 17px;
  }
`;

export default NavBar;
