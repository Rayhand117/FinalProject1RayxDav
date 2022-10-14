/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const HeadTitle = () => {
  return (
    <Judul>
      <p>Diduga Bambank korupsi ikan lele seberat 100 ton</p>
    </Judul>
  )
}

const Judul = styled.div`
  /* padding: 400px 0 50px 22px; */
  display: flex;
  width: 100%;
    max-width: 800px;
  /* position: absolute; */
  p {
    font-size: 2em;
    font-weight: 500;
    color: black;
    /* text-shadow: 4px 4px 4px rgba(0,0,0,0.37); */
    white-space: normal;
    /* word-break: break-all; */
  }
`;

export default HeadTitle;
