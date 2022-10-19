/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const ContentTitle = (props) => {
  return (
    <Title>
      <h2>{props.title}Latest News</h2>
      <span></span>
      <span></span>
    </Title>
  );
};

const Title = styled.div`
  margin-top: 20px;
  /* font-size: 40px;
  font-weight: 800; */
  /* background-color: coral; */
  display: flex;
  justify-content: space-around;
`;

export default ContentTitle;
