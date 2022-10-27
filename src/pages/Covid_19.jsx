/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "../molecules/MoleCardContent/NewsCard";
import { Wrapper, Cards, Title } from "./PageWrapper.styled";
const CovidURL = `${process.env.REACT_APP_BASE_URL}everything?q=covid-19&apiKey=${process.env.REACT_APP_API_KEY}`;

const Covid_19 = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const {
          data: { articles },
        } = await axios.get(CovidURL);
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
    <Wrapper>
      <Title>
        <h2>Covid 19 Latest News</h2>
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
              <NewsCard key={p?.url} item={p} />
            ))}
          </>
        ) : (
          "data tidak ditemukan"
        )}
      </Cards>
    </Wrapper>
  );
};

export default Covid_19;
