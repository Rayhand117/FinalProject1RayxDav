/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import ContentCardTitle from "./../../atoms/AtomContent/ContentCardTitle";
import ContentCardPicture from "./../../atoms/AtomContent/ContentCardPicture";
import Source from "../MoleSource/Source";

const ContentCard = () => {
  return (
      <Card>
        <ContentCardPicture />
        <ContentCardTitle />
        <Source />
      </Card>
  );
};



const Card = styled.div`
  flex: 0 0 400px;
  margin: 10px;
`;


export default ContentCard;
