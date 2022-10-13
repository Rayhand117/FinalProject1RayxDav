import React from "react";
import styled from "@emotion/styled";
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
  background-color: #deecff;
  color: black;
  font-weight: bold;
`;

export default Footer;
