import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Container from "../Container";
import { cssVariables as css } from "../../variables/cssvariables";

import medium from "../../images/icon_medium.svg";
import linkedIn from "../../images/icon_linkedIn.svg";
import dribbble from "../../images/icon_dribbble.svg";
import github from "../../images/icon_github.svg";

const StyledIcon = styled.a`
  display: flex;
  align-self: auto;
  padding: 0 8px;
  svg {
    fill: red;
  }
  img {
    opacity: 0.6;
    width: 20px;
    &:hover {
      opacity: 1;
      transition: all 0.2s linear;
    }
  }
`;

const SocialLinks = ({ justifyContent, marginTop }) => {
  const IconLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${justifyContent || "normal"};
    margin-top: ${marginTop || 0};
  `;

  return (
    <IconLinks>
      <StyledIcon href="https://www.linkedin.com/in/leemnelson/">
        <img src={linkedIn} />
      </StyledIcon>
      <StyledIcon href="https://medium.com/@leemnelson_">
        <img src={medium} />
      </StyledIcon>
      <StyledIcon href="https://dribbble.com/leemnelson">
        <img src={dribbble} />
      </StyledIcon>
      <StyledIcon href="https://github.com/lmnelson">
        <img src={github} />
      </StyledIcon>
    </IconLinks>
  );
};

export default SocialLinks;
