import React from "react";
import styled from "styled-components";

function Banner(props) {
  return <Images src={props.url} />;
}

export default Banner;

const Images = styled.img`
  width: 100%;
`;
