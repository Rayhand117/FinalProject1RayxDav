/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux";
import { Wrapper, Cards, Title } from "./PageWrapper.styled";
import {
  Card,
  CardPicture,
  SourceStyle,
  Sumber,
  Judul,
  Deskripsi,
} from "../molecules/MoleCardContent/CardWrapper.styled";

const Saved = () => {
  const dataArray = useSelector(state => state.news.dataArray);
  return (
    <Wrapper>
      <Title>
        <h2>Saved</h2>
        <span></span>
        <span></span>
      </Title>
      <Cards>
        {dataArray.length === 0 ? (
          <div>
            <h1>Tidak ada berita tersimpan</h1>
          </div>
        ) : (
          dataArray?.map((p) => (
            <Card key={p?.url}>
              <CardPicture>
                <img src={p.urlToImage} alt={`${p.title}`} />
              </CardPicture>
              <SourceStyle>
                <Sumber>
                  <a href={p.url} target="_blank" rel="noreferrer"
                  css={{
                    color: "rgb(255, 0, 128)",
                  }}
                  >
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
    </Wrapper>
  );
};

export default Saved;
