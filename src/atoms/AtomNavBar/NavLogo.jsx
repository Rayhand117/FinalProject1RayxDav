/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const NavLogo = () => {
  return (
    <Logo>
      <p css={css`
        color: white;
        background-color: black;
        padding: 8px;
        border-radius: 5px;
      `}>RCTN</p>
      <p css={css`
        color: black;
        background-color: white;
        padding: 5px;
        border-radius: 0 3px 3px 0;
      `}>Portal</p>
    </Logo>
  )
}

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  user-select: none;
  margin-right: 10px;
  font-weight: 700;
`;

export default NavLogo;
