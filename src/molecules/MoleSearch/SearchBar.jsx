import SearchInput from "../../atoms/AtomSearch/SearchInput"
import SearchIcon from "../../atoms/AtomSearch/SearchIcon";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const SearchBar = () => {
  return (
    <ForSearch>
      <InputSearch type="text" placeholder="Search Covid-19" />
      <TombolSearch type="button">
        <img
          src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/af2f34c3.svg"
          alt=""
        />
      </TombolSearch>
    </ForSearch>
  );
}

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

export default SearchBar;
