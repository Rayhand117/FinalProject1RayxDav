/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import logoSave from "../../assets/save.svg";
import logoPocket from "../../assets/pocket.svg";

// const Kanjuruhan = require("../../assets/kanjuruhan.jpeg");

const CardBaru = (props) => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
              <img src={logoSave} alt="Sv" />
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
            <ReadMore>
              Read More
            </ReadMore>
          </Baca>
        </div>
      </SourceStyle>
    </Card>
  );
};

const Toggle = styled.div `
  padding-left: 8px;
`;

const Card = styled.div`
  flex: 0 0 400px;
  margin: 10px;
`;

const CardPicture = styled.div`
  /* position: relative; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  /* background-color: black; */
  img {
    width: 100%;
    max-width: 400px;
    /* height: auto; */
    min-height: 225px;
    max-height: 225px;
    object-fit: cover;
    background-repeat: no-repeat;
    display: block;
    border-radius: 10px;
  }
  @media (max-width: 737px) {
    display: flex;
    justify-content: center;
    align-items: center;
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
  /* background-color: hotpink; */
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    margin: 0 5px;
  }
  img {
    width: 20px;
    /* height: 20px; */
  }
  p {
    color: gray;
  }
  div:nth-of-type(1) {
    /* background-color: black; */
    margin-left: auto;
  }
  @media (max-width: 737px) {
    display: flex;
    justify-content: center;
    align-items: center;
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

const Sumber = styled.span `/* span */
  padding: 5px 0;
  max-width: 180px;
`;

const Simpan = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 5px;background-color: hsl(104, 100%, 88.8235294117647%);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  :hover {
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  }
`;

const UnSave = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 5px;
  background-color: hsl(0, 100%, 88.8235294117647%);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  :hover {
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  }
`;

const Baca = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  background-color: #E8D3FF;
  border-radius: 5px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  a {
    display: flex;
    flex-direction: row;
  }
  :hover {
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  }
`;

const ReadMore = styled.a`
  padding-left: 8px;
  text-decoration: none;
  color: black;
  /* width: 100px; */
`;

export default CardBaru;
