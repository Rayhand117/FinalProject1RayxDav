/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import ContentCard from "./../molecules/MoleCardContent/ContentCard";
import CardBaru from "../molecules/MoleCardContent/CardBaru";

const Saved = ({ dataArray }) => {
  return (
    <Save>
      <Title>
        <h2>Saved</h2>
      </Title>
      <Cards>
        {dataArray.length === 0 ? (
          <div>
            <h1>Tidak ada berita tersimpan</h1>
          </div>
        ) : (
          dataArray?.map((p) => (
            <Card key={p?.title}>
              <CardPicture>
                <img src={p.urlToImage} alt={`${p.title}`} />
              </CardPicture>
              <SourceStyle>
                <Sumber>
                  <a href={p.url} target="_blank" rel="noreferrer">
                    {p.source.name}
                  </a>
                </Sumber>
              </SourceStyle>
              <Judul>
                <p>{p.title}</p>
              </Judul>
              <Deskripsi>
                <p>{p.description}</p>
              </Deskripsi>
            </Card>
          ))
        )}
      </Cards>
    </Save>
  );
};

const Save = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin: 20px;
  /* font-size: 40px;
  font-weight: 800; */
  /* background-color: coral; */
  display: flex;
  justify-content: center;
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

const Sumber = styled.span`
  /* span */
  padding: 5px 0;
  max-width: 180px;
  a {
    color: rgb(255, 0, 128);
  }
`;

export default Saved;
