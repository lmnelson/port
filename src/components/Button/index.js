import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const Wrapper = styled(Link)`
  font-size: 17px;
  align-self: left;
  font-family: ${css.typography.primaryBold};
  border: 2px solid ${css.color.red};
  padding: 20px;
  color: ${css.color.red};
  text-decoration: none;
  @media (max-width: ${css.breakpoint.md}) {
    align-self: auto;
    text-align: center;
  }
  &:hover {
    background-color: ${css.color.red};
    color: #fff;
  }
`;

const Button = ({ text, ...rest }) => <Wrapper {...rest}>{text}</Wrapper>;

export default Button;
