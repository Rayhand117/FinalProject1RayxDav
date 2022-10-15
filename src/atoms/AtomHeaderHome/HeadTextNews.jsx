/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import logoSave from "../../assets/save.svg";
import logoPocket from "../../assets/pocket.svg";

const HeadTextNews = () => {
  return (
    <HeadText>
      <UpperText
          css={{
            fontSize: "10px",
            padding: "10px 10px 0 10px",
            [mq[0]]: {
              fontSize: "12px",
            },
            [mq[1]]: {
              fontSize: "14px",
            },
          }}>
        <p>
          Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
          adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
          vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris,
          magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque...
          read more
        </p>
      </UpperText>
      <BottomButtons
          css={{
            alignSelf: "center",
            [mq[0]]: {
              fontSize: "12px",
            },
            [mq[1]]: {
              fontSize: "14px",
            },
          }}>
        <p>CNN Indonesia</p>
        <Simpan>
          <img src={logoSave} alt="Sv" />
          <div>Save</div>
        </Simpan>
        <Bagi>
          <img src={logoPocket} alt="Rm" />
          <div>Read More</div>
        </Bagi>
      </BottomButtons>
    </HeadText>
  );
};

const HeadText = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  /* background-color: green; */
  width: 100%;
  max-width: 500px;
  white-space: normal;
  @media (max-width: 737px) {
    margin-right: 30px;
  }
`;
const UpperText = styled.div`
  /* background-color: white; */
  p {
    font-size: 1.6em;
  }
`;
const BottomButtons = styled.div`
  /* background-color: hotpink; */
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  div {
    margin: 0 10px;
  }
  img {
    width: 20px;
    /* height: 20px; */
  }
`;

const Simpan = styled.div`
  display: flex;
  flex-direction: row;
`;

const Bagi = styled.div`
  display: flex;
  flex-direction: row;
`;

const breakpoints = [600, 870];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export default HeadTextNews;
