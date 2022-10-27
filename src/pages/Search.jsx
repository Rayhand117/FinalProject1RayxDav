/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import CardBaru from "../molecules/MoleCardContent/NewsCard";
import {
  SearchPage,
  Title,
  Cards
} from "./SearchWrapper.styled"

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

export default Search;
