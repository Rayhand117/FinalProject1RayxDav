/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const ContentCardDescription = (props) => {
  return (
    <Deskripsi>
      <p>blah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blah</p>
      {/* {props.item.description} */}
    </Deskripsi>
  );
};

const Deskripsi = styled.div`
  /* padding: 400px 0 50px 22px; */
  display: flex;
  width: 100%;
  max-width: 800px;
  /* position: absolute; */
  p {
    font-size: 1em;
    font-weight: 400;
    color: black;
    /* text-shadow: 4px 4px 4px rgba(0,0,0,0.37); */
    white-space: normal;
    /* word-break: break-all; */
  }
`;

export default ContentCardDescription;
