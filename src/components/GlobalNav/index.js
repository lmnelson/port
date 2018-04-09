import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const activeClassName = "active";

const Wrapper = styled.div`
  display: flex;
  background-color: ${css.color.red};
  color: #ffffff;
  padding: 1rem 2rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 1.5rem;
  padding: 3rem 2rem;
  font-family: "Soleil";
  text-align: center;
  text-transform: uppercase;
  &.active {
    color: #ffffff;
    font-family: "Soleil Bold";
  }
  &:hover {
    color: #ffffff;
  }
  transition: all 0.2s linear;
`;

const Nav = styled.div`
  display: flex;
  margin-left: auto;
`;

const GlobalNav = () => (
  <Wrapper>
    <StyledLink to="/work">Lee Nelson</StyledLink>
    <Nav>
      <StyledLink to="/work" activeClassName={activeClassName}>
        Work
      </StyledLink>
      <StyledLink to="/about" activeClassName={activeClassName}>
        About
      </StyledLink>
      <StyledLink to="/blog" activeClassName={activeClassName}>
        Blog
      </StyledLink>
      <StyledLink to="/contact" activeClassName={activeClassName}>
        Contact
      </StyledLink>
    </Nav>
  </Wrapper>
);

export default GlobalNav;
