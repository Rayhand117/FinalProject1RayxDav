import React from "react";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import FooterText from "../../atoms/AtomFooter/FooterText";

const Footer = () => {
  return (
    <FooterStyle>
      <FooterText />
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: hotpink; */
  color: black;
  font-weight: bold;
`;

export default Footer;
