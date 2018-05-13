import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const Container = ({ children, width, flexDirection, justifyContent }) => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: ${justifyContent || `normal`};
    flex-direction: ${flexDirection || `column`};
    width: ${width || `700px`};
    margin: 0 auto;
    @media (max-width: ${css.breakpoint.md}) {
      width: 100%;
      padding-left: ${css.scaffold.mobileHorizontalPadding};
      padding-right: ${css.scaffold.mobileHorizontalPadding};
    }
  `;
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
