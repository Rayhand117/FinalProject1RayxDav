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
import "./slide.css";

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
              top: -10,
              paddingTop: 100,
              height: "100vh",
              width: "100vw",
              justifyContent: "spaceEvenly",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(10px)",
              // zIndex: -1,
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
        </Navigasi>
      </Navigator>
      <SearchBar />
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
    a.active{
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

const breakpoints = [576, 768];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export default NavLinks;
