/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import logoSave from "../../assets/save.svg";

const SourceSave = (props) => {
  const saveItem = (e) => {
    props.setSaved([...props.saved, e]);
    props.setIsSaved({ ...props.isSaved, [e.url]: true });
  };
  const unsaveItem = (e) => {
    props.setSaved(props.saved.filter((item) => item.url !== e.url));
    props.setIsSaved({ ...props.isSaved, [e.url]: false });
  };
  return (
    <>
      {/* {props.isSaved[props.item.url] ? (
        <Simpan>
          <img src={logoSave} alt="Sv" />
          <div>Unsave</div>
        </Simpan>
      ) : (
        <Simpan>
          <img src={logoSave} alt="Sv" />
          <div>Save</div>
        </Simpan>
      )} */}
      <Simpan>
        <img src={logoSave} alt="Sv" />
        <div>Save</div>
      </Simpan>
    </>
  );
};

const Simpan = styled.div`
  display: flex;
  flex-direction: row;
`;

export default SourceSave;
