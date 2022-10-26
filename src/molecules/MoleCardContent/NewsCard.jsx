/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import logoSave from "../../assets/save.svg";
import logoPocket from "../../assets/pocket.svg";
import logoTrash from "../../assets/trash.svg";
import { useSelector, useDispatch } from "react-redux";
import { saveNews, unSaveNews } from "../../features/news/newsSlice";
import {
  FlexRow,
  AnmTransisi,
  FlexCentered,
  Toggle,
  Card,
  CardPicture,
  Judul,
  Deskripsi,
  SourceStyle,
  Sumber,
  TombolReuse,
  Simpan,
  UnSave,
  Baca,
  ReadMore,
} from "./CardWrapper.styled";

const NewsCard = (props) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const dispatch = useDispatch();
  const dataArray = useSelector((state) => state.news.dataArray);
  const dataObject = useSelector((state) => state.news.dataObject);
  // console.log("dataArray", dataArray);

  const saveBerita = (e) => {
    dispatch(
      saveNews({
        dataArray: [...dataArray, e],
        dataObject: { ...dataObject, [e.url]: true },
      })
    );
  };
  const unSaveBerita = (e) => {
    dispatch(
      unSaveNews({
        dataArray: dataArray.filter((item) => item.url !== e.url),
        dataObject: { ...dataObject, [e.url]: false },
      })
    );
  };
  return (
    <Card>
      <CardPicture>
        <img src={props.item.urlToImage} alt={`${props.item.title}`} />
      </CardPicture>
      <Judul>
        <p>{props.item.title}</p>
      </Judul>
      <Deskripsi>
        <p>{props.item.description}</p>
      </Deskripsi>
      <SourceStyle>
        <Sumber>
          <p>{props.item.source.name}</p>
        </Sumber>
        {dataObject[props.item.url] ? (
          <div>
            <UnSave onClick={() => unSaveBerita(props.item)}>
              <img src={logoTrash} alt="Sv" />
              <Toggle>Unsave</Toggle>
            </UnSave>
          </div>
        ) : (
          <div>
            <Simpan onClick={() => saveBerita(props.item)}>
              <img src={logoSave} alt="Sv" />
              <Toggle>Save</Toggle>
            </Simpan>
          </div>
        )}
        <div>
          <Baca onClick={() => openInNewTab(props.item.url)}>
            <img src={logoPocket} alt="Rm" />
            <ReadMore>Read More</ReadMore>
          </Baca>
        </div>
      </SourceStyle>
    </Card>
  );
};

export default NewsCard;
