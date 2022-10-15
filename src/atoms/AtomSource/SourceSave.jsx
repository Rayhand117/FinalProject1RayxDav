/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import logoSave from "../../assets/save.svg";

const SourceSave = () => {
  return (
    <Simpan>
      <img src={logoSave} alt="Sv" />
      <div>Save</div>
    </Simpan>
  );
};

const Simpan = styled.div`
  display: flex;
  flex-direction: row;
`;

export default SourceSave;
