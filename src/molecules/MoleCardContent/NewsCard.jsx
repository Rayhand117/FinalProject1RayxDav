/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import logoSave from "../../assets/save.svg";
import logoPocket from "../../assets/pocket.svg";
import logoTrash from "../../assets/trash.svg";

const NewsCard = (props) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
      <CardPicture>
        <img src={props.item.urlToImage} alt={`${props.item.title}`} />
      </CardPicture>
      <Judul>
        <p>{props.item.title}</p>
      </Judul>
      <Deskripsi>
        <p>{props.item.description}</p>
      </Deskripsi>
      <SourceStyle>
        <Sumber>
          <p>{props.item.source.name}</p>
        </Sumber>
        {props.dataObject[props.item.url] ? (
          <div>
            <UnSave onClick={() => unSaveBerita(props.item)}>
              <img src={logoTrash} alt="Sv" />
              <Toggle>Unsave</Toggle>
            </UnSave>
          </div>
        ) : (
          <div>
            <Simpan onClick={() => saveBerita(props.item)}>
              <img src={logoSave} alt="Sv" />
              <Toggle>Save</Toggle>
            </Simpan>
          </div>
        )}
        <div>
          <Baca onClick={() => openInNewTab(props.item.url)}>
            <img src={logoPocket} alt="Rm" />
            <ReadMore>Read More</ReadMore>
          </Baca>
        </div>
      </SourceStyle>
    </Card>
  );
};

const FlexRow = css`
  display: flex;
  flex-direction: row;
`;

const AnmTransisi = css`
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

const FlexCentered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Toggle = styled.div`
  padding-left: 8px;
`;

const Card = styled.div`
  flex: 0 0 400px;
  margin: 10px;
  background-color: #deecff;
  ${AnmTransisi};
  ::after {
    content: "";
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
    opacity: 0;
    ${AnmTransisi};
  }
  :hover {
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
    -webkit-transform: scale(1.05, 1.05);
  }
  :hover::after {
    opacity: 1;
  }
`;

const CardPicture = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  img {
    width: 100%;
    max-width: 400px;
    min-height: 225px;
    max-height: 225px;
    object-fit: cover;
    background-repeat: no-repeat;
    display: block;
    border-radius: 10px;
  }
  @media (max-width: 737px) {
    ${FlexCentered};
    font-size: 14px;
    img {
      max-width: 400px;
    }
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

const Judul = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  p {
    font-size: 1.6em;
    font-weight: 500;
    color: black;
    white-space: normal;
  }
`;

const Deskripsi = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  p {
    font-size: 1em;
    font-weight: 400;
    color: black;
    white-space: normal;
  }
`;

const SourceStyle = styled.div`
  margin-top: 10px;
  ${FlexRow};
  align-items: center;
  div {
    margin: 0 5px;
  }
  img {
    width: 20px;
  }
  p {
    color: gray;
  }
  div:nth-of-type(1) {
    margin-left: auto;
  }
  @media (max-width: 737px) {
    ${FlexCentered};
    font-size: 12px;
    align-self: center;
  }
  div:nth-of-type(1) {
    margin-left: auto;
  }
  @media (max-width: 420px) {
    div:nth-of-type(1) {
      margin-left: 0;
    }
  }
`;

const Sumber = styled.span`
  padding: 5px 0;
  max-width: 180px;
`;

const TombolReuse = css`
  ${FlexRow};
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  ${AnmTransisi};
  :hover {
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);
  }
`;

const Simpan = styled.div`
  ${TombolReuse};
  background-color: hsl(104, 100%, 88.8235294117647%);
`;

const UnSave = styled.div`
  ${TombolReuse};
  background-color: hsl(0, 100%, 88.8235294117647%);
`;

const Baca = styled.div`
  ${TombolReuse};
  a {
    ${FlexRow};
  }
  background-color: #e8d3ff;
`;

const ReadMore = styled.a`
  padding-left: 8px;
  text-decoration: none;
  color: black;
`;

export default NewsCard;
