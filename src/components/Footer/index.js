import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const Wrapper = styled.footer`
  padding: 10em;
  background-color: ${css.color.charcoal};
`;

const Footer = () => <Wrapper />;

export default Footer;
