import SearchInput from "../../atoms/AtomSearch/SearchInput"
import SearchIcon from "../../atoms/AtomSearch/SearchIcon";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const SearchBar = () => {
  return (
    <ForSearch>
      <SearchInput />
      <SearchIcon />
    </ForSearch>
  )
}

const ForSearch = styled.div`
  display: flex;
  flex-direction: row;
`;

export default SearchBar;
