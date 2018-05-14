import React from "react";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const Wrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 60px;
  @media (max-width: ${css.breakpoint.md}) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const ContentWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

export default ContentWrapper;
