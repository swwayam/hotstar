import React from "react";
import styled from "styled-components";

function BannerSection(props) {
  return <Space><Images src={props.url} /></Space>;
}

export default BannerSection;

const Space = styled.div`
  margin: 0 10px;
`

const Images = styled.img`
  width: 100%;
  height: auto;
  margin: 0 10px;
  border-radius: 5px;
`;
