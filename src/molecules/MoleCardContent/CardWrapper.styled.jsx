/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const FlexRow = css`
  display: flex;
  flex-direction: row;
`;

export const AnmTransisi = css`
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const FlexCentered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Toggle = styled.div`
  padding-left: 8px;
`;

export const Card = styled.div`
  flex: 0 0 400px;
  margin: 10px;
  background-color: #deecff;
  ${AnmTransisi};
  ::after {
    content: "";
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
    opacity: 0;
    ${AnmTransisi};
  }
  :hover {
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
    -webkit-transform: scale(1.05, 1.05);
  }
  :hover::after {
    opacity: 1;
  }
`;

export const CardPicture = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  img {
    width: 100%;
    max-width: 400px;
    min-height: 225px;
    max-height: 225px;
    object-fit: cover;
    background-repeat: no-repeat;
    display: block;
    border-radius: 10px;
  }
  @media (max-width: 737px) {
    ${FlexCentered};
    font-size: 14px;
    img {
      max-width: 400px;
    }
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

export const Judul = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  p {
    font-size: 1.6em;
    font-weight: 500;
    color: black;
    white-space: normal;
  }
`;

export const Deskripsi = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  p {
    font-size: 1em;
    font-weight: 400;
    color: black;
    white-space: normal;
  }
`;

export const SourceStyle = styled.div`
  margin-top: 10px;
  ${FlexRow};
  align-items: center;
  div {
    margin: 0 5px;
  }
  img {
    width: 20px;
  }
  p {
    color: gray;
  }
  div:nth-of-type(1) {
    margin-left: auto;
  }
  @media (max-width: 737px) {
    ${FlexCentered};
    font-size: 12px;
    align-self: center;
  }
  div:nth-of-type(1) {
    margin-left: auto;
  }
  @media (max-width: 420px) {
    div:nth-of-type(1) {
      margin-left: 0;
    }
  }
`;

export const Sumber = styled.span`
  padding: 5px 0;
  max-width: 180px;
`;

export const TombolReuse = css`
  ${FlexRow};
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  ${AnmTransisi};
  :hover {
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const Simpan = styled.div`
  ${TombolReuse};
  background-color: hsl(104, 100%, 88.8235294117647%);
`;

export const UnSave = styled.div`
  ${TombolReuse};
  background-color: hsl(0, 100%, 88.8235294117647%);
`;

export const Baca = styled.div`
  ${TombolReuse};
  a {
    ${FlexRow};
  }
  background-color: #e8d3ff;
`;

export const ReadMore = styled.a`
  padding-left: 8px;
  text-decoration: none;
  color: black;
`;