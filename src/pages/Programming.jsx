import { useState, useEffect } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
// import ContentCard from "./../molecules/MoleCardContent/ContentCard";
import CardBaru from "../molecules/MoleCardContent/CardBaru";
import ContentTitle from "./../atoms/AtomContent/ContentTitle";

const Covid_19 = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);

  const getData = async () => {
    setLoading(true);
    try{
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=programming&apiKey=252f4fa7ed9b4e878d81308fb55aaa4c`
      );
      setData(response.data.articles);
      setLoading(false);
    } catch(error) {
      setData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Covid>
      <Title>
        <h2>Programming Latest News</h2>
        <span></span>
        <span></span>
      </Title>
      <Cards>
        {loading ? (
          <div>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"
              alt="Loading..."
            />
          </div>
        ) : data.length !== 0 ? (
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
        ) : (
          "data tidak ditemukan"
        )}
        {/* <ContentCard /> */}
      </Cards>
    </Covid>
  );
};

const Covid = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
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
  margin: 40px;
  /* font-size: 40px;
  font-weight: 800; */
  /* background-color: coral; */
  display: flex;
  justify-content: center;
`;

export default Covid_19;
