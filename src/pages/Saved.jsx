/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
// import ContentCard from "./../molecules/MoleCardContent/ContentCard";
import CardBaru from "../molecules/MoleCardContent/CardBaru";

const Saved = ({ dataArray }) => {
  return (
    <Save>
      <Cards>
        {dataArray.length === 0 ? (
          <div>
            <h1>Tidak ada berita tersimpan</h1>
          </div>
        ) : (
          dataArray.map((desc, x) => (
            <table
            key={x}
            >
              <thead>
                <tr>
                  <th>Sources</th>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{desc.source.name} <a href={desc.url} target="_blank" rel="noreferrer">Read More</a></td>
                  <td>{desc.title}</td>
                  <td>{desc.description}</td>
                </tr>
              </tbody>
            </table>
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

export default Saved;
