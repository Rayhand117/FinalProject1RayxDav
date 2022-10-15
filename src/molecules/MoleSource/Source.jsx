/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import SourceText from "../../atoms/AtomSource/SourceText";
import SourceSave from "../../atoms/AtomSource/SourceSave";
import SourceRead from "./../../atoms/AtomSource/SourceRead";

const Source = () => {
  return (
    <SourceStyle>
      <SourceText />
      <SourceSave />
      <SourceRead />
    </SourceStyle>
  );
};

const SourceStyle = styled.div`
  /* background-color: hotpink; */
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  div {
    margin: 0 10px;
  }
  img {
    width: 20px;
    /* height: 20px; */
  }
  @media (max-width: 737px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    align-self: center;
`;

export default Source;
