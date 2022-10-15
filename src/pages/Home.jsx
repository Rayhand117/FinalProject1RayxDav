/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Headnya from "../molecules/MoleCardHead/Headnya";
import ContentCard from "./../molecules/MoleCardContent/ContentCard";
import ContentTitle from "./../atoms/AtomContent/ContentTitle";

const Home = () => {
  return (
    <Rumah>
      <Headnya />
      <ContentTitle />
      <Cards>
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </Cards>
    </Rumah>
  );
};

const Rumah = styled.div`
  /* background-color: lightgray; */
  display: flex;
  // align-items: center;
  flex-direction: column;
  margin-top: 57px;
`;

const Cards = styled.div`
  display: flex;
  width: 100%;
  max-width: 1500px;
  align-self: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 737px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    align-self: center;
    white-space: normal;
    @media (max-width: 420px) {
      font-size: 13px;
      text-align: center;
      padding: 0 10px;
      img {
        max-width: 350px;
      }
    }
  }
`;

export default Home;
