/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import CardBaru from "../molecules/MoleCardContent/NewsCard";

const Search = (props) => {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);
  return (
    <SearchPage>
      <Title>
        <h2>Search Results</h2>
        <span></span>
        <span></span>
      </Title>
      <Cards>
        {props.loading ? (
          <div>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"
              alt="Loading..."
            />
          </div>
        ) : data.length !== 0 ? (
          <>
            {data?.map((p) => (
              <CardBaru
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
    </SearchPage>
  );
};

const FlexCenter = css`
  display: flex;
  justify-content: center;
`;

const SearchPage = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Cards = styled.div`
  ${FlexCenter};
  align-self: center;
  width: 100%;
  max-width: 1500px;
  flex-wrap: wrap;
  flex-direction: row;

  @media (max-width: 737px) {
    ${FlexCenter};
    align-self: center;
    align-items: center;
    font-size: 12px;
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
  ${FlexCenter};
`;
export default Search;
