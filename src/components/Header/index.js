import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const HeaderWrapper = styled.div`
  display: flex;
  background-color: ${css.color.purple};
  /* border-top: 2px solid #3e228c; */
  /* border-bottom: 1px solid #3e228c54; */
  color: #ffffff;
  justify-content: center;
`;

const Container = styled.div`
  flex: 0 1 ${css.scaffold.smallContainerWidth};
`;

const StyledLink = styled(Link)`
  display: flex;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 1.5rem;
  padding: 4rem 2rem;
  flex-grow: 1;
  font-family: ${css.typography.primary};
  justify-content: center;
  text-transform: capitalize;
  &:hover {
    color: #ffffff;
  }
  transition: all 0.2s linear;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Header = () => (
  <HeaderWrapper>
    <Container>
      <Nav>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/case-studies">Case Studies</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Nav>
    </Container>
  </HeaderWrapper>
);

export default Header;
