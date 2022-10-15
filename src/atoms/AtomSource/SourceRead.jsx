/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import logoPocket from "../../assets/pocket.svg";

const SourceRead = () => {
  return (
    <Bagi>
      <img src={logoPocket} alt="Rm" />
      <div>Read More</div>
    </Bagi>
  );
};

const Bagi = styled.div`
  display: flex;
  flex-direction: row;
`;

export default SourceRead;
