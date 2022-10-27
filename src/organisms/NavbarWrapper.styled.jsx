/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const FlexRow = css`
  display: flex;
  flex-direction: row;
`;

export const FlexCentered = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// NAVIGASI ----------------------------------------------------
export const NavigasiBar = styled.nav`
  position: fixed;
  ${FlexRow};
  width: 100%;
  justify-content: space-around;
  align-items: center;
  top: 0;
  background-color: #deecff;
  z-index: 1;
`;

export const Navigator = styled.div`
  ${FlexRow};
  top: 0;
  padding: 10px 0;
`;

export const Navigasi = styled.nav`
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
export const Hamburger = styled.div`
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

export const CheckBox = styled.input`
  position: absolute;
  width: 40px;
  height: 28px;
  left: -6px;
  top: -3px;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
`;

export const Garis = styled.span`
  display: block;
  width: 28px;
  height: 3px;
  background-color: rgb(234, 192, 255);
  border-radius: 3px;
  transition: all 0.5s;
  background-color: black;
`;

export const breakpoints = [877, 950];
export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

// SEARCH BAR ----------------------------------------------------
export const ForSearch = styled.div`
  ${FlexRow};
`;

export const TombolSearch = styled.button`
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

export const InputSearch = styled.input`
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
