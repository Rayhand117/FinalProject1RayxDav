/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import logoPocket from "../../assets/pocket.svg";

const SourceRead = (props) => {
  return (
    <Bagi>
      <img src={logoPocket} alt="Rm" />
      <ReadMore href="https://google.com">Read More</ReadMore>
      {/* href={props.item.url} */}
    </Bagi>
  );
};

const Bagi = styled.div`
  display: flex;
  flex-direction: row;
`;

const ReadMore = styled.a`
  padding-left: 8px;
`;

export default SourceRead;
