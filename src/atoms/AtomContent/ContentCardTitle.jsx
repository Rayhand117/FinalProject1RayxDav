/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const ContentCardTitle = () => {
  return (
    <Judul>
      <p>Jokowi Minta Polri Lanjutkan Penyelidikan Tragedi Kanjuruhan</p>
    </Judul>
  );
};

const Judul = styled.div`
  /* padding: 400px 0 50px 22px; */
  display: flex;
  width: 100%;
  max-width: 800px;
  /* position: absolute; */
  p {
    font-size: 1.6em;
    font-weight: 500;
    color: black;
    /* text-shadow: 4px 4px 4px rgba(0,0,0,0.37); */
    white-space: normal;
    /* word-break: break-all; */
  }
`;

export default ContentCardTitle;
