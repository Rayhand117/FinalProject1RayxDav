/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const HeadHotTopic = () => {
  return (
    <HotTopic>
      <h1>Hot Topic</h1>
      <span></span>
      <span></span>
    </HotTopic>
  )
}

const HotTopic = styled.div`
  /* font-size: 40px;
  font-weight: 800; */
  /* background-color: coral; */
  display: flex;
  justify-content: space-around;
`;

export default HeadHotTopic;
