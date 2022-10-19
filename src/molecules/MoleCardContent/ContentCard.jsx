/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import ContentCardPicture from "./../../atoms/AtomContent/ContentCardPicture";
import ContentCardTitle from "./../../atoms/AtomContent/ContentCardTitle";
import ContentCardDescription from "../../atoms/AtomContent/ContentCardDescription";
import Source from "../MoleSource/Source";

const ContentCard = (props) => {
  const saveBerita = (e) => {
    props.setDataArray([...props.dataArray, e]);
    props.setDataObject({ ...props.dataObject, [e.url]: true });
  };
  const unSaveBerita = (e) => {
    props.setDataArray(props.dataArray.filter((item) => item.url !== e.url));
    props.setDataObject({ ...props.dataObject, [e.url]: false });
  };
  return (
      <Card>
        <ContentCardPicture />
        <ContentCardTitle />
        <ContentCardDescription />
        <Source />
      </Card>
  );
};



const Card = styled.div`
  flex: 0 0 400px;
  margin: 10px;
`;


export default ContentCard;
