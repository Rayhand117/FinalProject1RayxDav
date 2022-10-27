/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const FlexCenter = css`
  display: flex;
  justify-content: center;
`;

export const SearchPage = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const Cards = styled.div`
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

export const Title = styled.div`
  margin: 40px;
  ${FlexCenter};
`;
