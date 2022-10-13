/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const SearchInput = () => {
  return <InputSearch type="text" placeholder="Search Covid-19" />;
};

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

export default SearchInput;
