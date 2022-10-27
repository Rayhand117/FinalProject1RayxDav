/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource @emotion/react */
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
import logoCari from "../assets/cari.svg";
import {
  NavigasiBar,
  Navigator,
  Navigasi,
  Hamburger,
  CheckBox,
  Garis,
  mq,
  ForSearch,
  TombolSearch,
  InputSearch
} from "./NavbarWrapper.styled"

const NavBar = () => {
  // const [dataArray, setDataArray] = useState([]);
  // const [dataObject, setDataObject] = useState({});
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const searchNews = async () => {
    setLoading(true);
    navigate("/search");
    try {
      const {
        data: { articles },
      } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}everything?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setData(articles);
      setLoading(false);
    } catch (error) {
      setData([]);
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchNews();
    }
  };

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
        <Route path="/" element={<Home />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/covid_19" element={<Covid19 />} />
        <Route path="/saved" element={<Saved />} />
        <Route
          path="/search"
          element={<Search data={data} loading={loading} />}
        />
      </Routes>
    </>
  );
};

export default NavBar;
