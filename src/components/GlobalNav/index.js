import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Container from "../Container";
import SocialLinks from "../SocialLinks";
import { cssVariables as css } from "../../variables/cssvariables";

import medium from "../../images/icon_medium.svg";
import linkedIn from "../../images/icon_linkedIn.svg";
import dribbble from "../../images/icon_dribbble.svg";
import github from "../../images/icon_github.svg";

const activeClassName = "active";

const Wrapper = styled.div`
  display: flex;
  background-color: ${css.color.red};
  color: #ffffff;
  padding: 30px 30px;
  @media (max-width: ${css.breakpoint.md}) {
    display: none;
  }
`;
const Brand = styled.div`
  h1 {
    margin-top: 0;
    margin-bottom: 0;
    font-family: ${css.typography.secondary};
    color: #fff;
    font-weight: normal;
    font-size: 21px;
  }
  p {
    font-family: ${css.typography.primary};
    font-size: 13px;
    color: #fff;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: normal;
    opacity: 0.5;
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0 20px;
  font-family: ${css.typography.primaryBold};
  text-align: center;
  text-transform: uppercase;
  align-items: center;
  &.active {
    color: #ffffff;
  }
  &:hover {
    color: #ffffff;
    text-decoration: none;
  }
  transition: all 0.2s linear;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  padding: 0 0 0 20px;
`;
const TextLinks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-right: 40px;
`;

const GlobalNav = () => (
  <Wrapper>
    <Brand />
    <Nav>
      <TextLinks>
        <StyledLink to="/work" activeClassName={activeClassName}>
          Work
        </StyledLink>
        <StyledLink to="/gallery" activeClassName={activeClassName}>
          Gallery
        </StyledLink>
        <StyledLink to="/about" activeClassName={activeClassName}>
          About
        </StyledLink>
        <StyledLink to="/contact" activeClassName={activeClassName}>
          Contact
        </StyledLink>
      </TextLinks>
      <SocialLinks marginTop="-6px" />
    </Nav>
  </Wrapper>
);

export default GlobalNav;
