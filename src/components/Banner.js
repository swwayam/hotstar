import React from "react";
import styled from "styled-components";

function Banner(props) {
  return <Space><Images src={props.url} /></Space>;
}

export default Banner;

const Space = styled.div`
  margin: 0 10px;
`

const Images = styled.img`
  width: 100%;
  height: 60vh;
  margin: 0 10px;
`;
