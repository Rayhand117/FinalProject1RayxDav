import { useState, useEffect } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Headnya from "../molecules/MoleCardHead/Headnya";
// import ContentCard from "./../molecules/MoleCardContent/ContentCard";
import CardBaru from "../molecules/MoleCardContent/CardBaru";
import ContentTitle from "./../atoms/AtomContent/ContentTitle";

const Home = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);

  const getData = () => {
    setLoading(true);
    axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=252f4fa7ed9b4e878d81308fb55aaa4c`)
      .then((response) => {
        setData(response.data.articles);
        setLoading(false);
      }).catch((error) => {
        setData([]);
        setLoading(false);
      })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Rumah>
      {/* <Headnya /> */}
      <Title>
        <h2>Indonesia Latest News</h2>
        <span></span>
        <span></span>
      </Title>
      <Cards>
      {loading ?
        <div>
          <h1>Loading...</h1>
        </div>
        : data.length !== 0 ? (
          <>
            {data.map((item, i) => (
              <CardBaru
                item={item}
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataObject={props.dataObject}
                setDataObject={props.setDataObject}
              />
            ))}
          </>
        ) : 'data tidak ditemukan'}
        {/* <ContentCard /> */}
      </Cards>
    </Rumah>
  );
};

const Rumah = styled.div`
  /* background-color: lightgray; */
  display: flex;
  // align-items: center;
  flex-direction: column;
  margin-top: 40px;
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

const Title = styled.div`
  margin-top: 20px;
  /* font-size: 40px;
  font-weight: 800; */
  /* background-color: coral; */
  display: flex;
  justify-content: space-around;
`;

export default Home;
