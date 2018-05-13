import React from "react";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const Text = styled.p`
  font-family: ${css.typography.primaryBold};
  font-weight: 600;
  color: ${css.color.charcoal};
  font-size: 19px;
  line-height: 1.7;
  margin-bottom: 40px;
  margin-top: 10px;
  @media (max-width: ${css.breakpoint.md}) {
    margin-bottom: 30px;
  }
  &::first-letter {
    font-size: 68px;
    float: left;
    line-height: 0;
    padding-right: 10px;
    padding-bottom: 15px;
    padding-top: 35px;
    color: ${css.color.red};
  }
`;

const LeadParagraph = ({ children }) => <Text>{children}</Text>;

export default LeadParagraph;
