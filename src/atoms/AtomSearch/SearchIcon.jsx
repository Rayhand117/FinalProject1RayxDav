/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const SearchIcon = () => {
  return (
    <TombolSearch type="button">
      <img
        src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/af2f34c3.svg"
        alt=""
      />
    </TombolSearch>
  );
};

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

export default SearchIcon;
