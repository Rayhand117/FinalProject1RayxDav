/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import ContentCard from "./../molecules/MoleCardContent/ContentCard";
import ContentTitle from "./../atoms/AtomContent/ContentTitle";

const Programming = () => {
  return (
    <>
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
    </>
  );
};

const Cards = styled.div`
  display: flex;
  width: 100%;
  max-width: 1500px;
  align-self: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export default Programming;
