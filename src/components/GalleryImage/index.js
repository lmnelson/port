import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import { cssVariables as css } from "../../variables/cssvariables";

const GalleryImage = ({ imageUrl, ...rest }) => {
  const Wrapper = styled.div`
    padding: 10px;
    position: relative;
    transition: all 0.2s linear;
    background-image: url(${imageUrl});
    background-position: center center;
    background-size: 500px;
    height: 225px;
    transition: all 0.25s linear;
    border: 10px solid #fff;
    outline: 1px solid #ddd;
    &:hover {
      cursor: pointer;
      background-size: 600px;
    }
    &:after {
      transition: all 0.1s linear;
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: transparent;
    }
    &:hover:after {
      background-color: rgba(0, 0, 0, 0.6);
      background-size: 200%;
    }
  `;
  return <Wrapper {...rest} />;
};

export default GalleryImage;
