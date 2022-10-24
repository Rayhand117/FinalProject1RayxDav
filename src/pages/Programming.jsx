import { useState, useEffect } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
// import { css } from "@emotion/react";
import NewsCard from "../molecules/MoleCardContent/NewsCard";

const Programming = (props) => {
  const ProgrammingURL = `${process.env.REACT_APP_BASE_URL}everything?q=programming&apiKey=${process.env.REACT_APP_API_KEY}`;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const {
          data: { articles },
        } = await axios.get(ProgrammingURL);
        // console.log("ARTICLES", articles);
        setData(articles);
        setLoading(false);
      } catch (e) {
        // nopes e
        setData([]);
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <Program>
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
            {data?.map((p) => (
              <NewsCard
                key={p?.url}
                item={p}
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
      </Cards>
    </Program>
  );
};

const Program = styled.div`
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
  display: flex;
  justify-content: center;
`;

export default Programming;
