import React from "react";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
// import { css } from "@emotion/react";
import FooterText from "../../atoms/AtomFooter/FooterText";

const Footer = () => {
  return (
    <FooterStyle>
      <FooterText />
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: bold;
  text-align: center;
`;

export default Footer;
