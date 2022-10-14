/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import HeadTitle from "./HeadTitle";

const HeadCardPicture = () => {
  return (
    <>
      <HeadCard>
        <HeadTitle />
        <img src={BBCPict} alt="bbc" />
      </HeadCard>
    </>
  );
};

const BBCPict = require("../../assets/BBCNews.jpg");

const HeadCard = styled.div`
  /* position: relative; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  /* background-color: black; */
  img {
    width: 100%;
    max-width: 800px;
    height: auto;
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
  }
  /* background-image: url(${BBCPict});
  width: 100%;
  max-width: 800px;
  height: auto;
  background-repeat: no-repeat;
  object-fit: cover; */
  /* background-size: cover; */
  /* background-position: center; */
`;

export default HeadCardPicture;
