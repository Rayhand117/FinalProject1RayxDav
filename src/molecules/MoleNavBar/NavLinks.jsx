/* eslint-disable react/jsx-pascal-case */
import { useRef } from "react";
import NavLogo from "../../atoms/AtomNavBar/NavLogo";
import NavHome from "../../atoms/AtomNavBar/NavHome";
import NavProgramming from "../../atoms/AtomNavBar/NavProgramming";
import NavCovid_19 from "../../atoms/AtomNavBar/NavCovid_19";
import NavSaved from "../../atoms/AtomNavBar/NavSaved";

import SearchBar from "../MoleSearch/SearchBar";

/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import "./slide.css";

const NavLinks = function () {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("slide");
  };

  return (
    <>
      <Navigator>
        <NavLogo />
        <Navigasi
          ref={navRef}
          css={{
            [mq[0]]: {
              position: "absolute",
              right: 0,
              top: -1,
              // paddingBottom: "200px",
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
        <InputSearch type="text" placeholder="Search Covid-19" />
        <TombolSearch type="button">
          <img
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/af2f34c3.svg"
            alt=""
          />
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
    </>
  );
};

const Navigator = styled.div`
  display: flex;
  flex-direction: row;
  top: 0;
  padding: 10px 0;
`;

const Navigasi = styled.nav`
  font-size: 20px;
  /* background-color: hotpink; */
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    color: hsl(240, 29.41176470588236%, 10%);
    display: flex;
    align-items: center;
    justify-content: center;
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
      /* padding-right: 50%;
      margin-right: -70%; */
      padding: 4px 33vw;
    }
  }
`;

// HAMBURGER
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  height: 20px;
  justify-content: space-between;
  position: relative;
  z-index: 5;
  /* background-color: hotpink; */
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

const ForSearch = styled.div`
  display: flex;
  flex-direction: row;
`;

const TombolSearch = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding-right: 12px;
  padding-left: 12px;
  background-color: rgb(255, 255, 255);
  border-left: 2px solid #000000;
  border-top: 2px solid #000000;
  border-right: 0;
  border-bottom: 2px solid #000000;
  /* border: 2px solid #000000; */
  border-radius: 5px 0 0 5px;
  outline: none;
  ::placeholder {
    color: hsla(216, 9%, 21%, 0.46);
    font-weight: 400;
    font-size: 17px;
  }
`;

export default NavLinks;
