import React from "react";
import HeadHotTopic from "../../atoms/AtomHeaderHome/HeadHotTopic";
import HeadCardPicture from "../../atoms/AtomHeaderHome/HeadCardPicture";
import HeadTitle from "../../atoms/AtomHeaderHome/HeadTitle";
import HeadTextNews from "../../atoms/AtomHeaderHome/HeadTextNews";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Headnya = () => {
  return (
    <>
      <HeadHotTopic />
      <KiriKanan
        css={{
          [mq[0]]: {
            flexDirection: "column",
          },
        }}>
        <HeadCardPicture />
        <HeadTextNews />
      </KiriKanan>
    </>
  );
};

const KiriKanan = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const breakpoints = [737, 768];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export default Headnya;
