import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Container from "../Container";
import SocialLinks from "../SocialLinks";
import { cssVariables as css } from "../../variables/cssvariables";

const Wrapper = styled.footer`
  display: grid;
  grid-template-rows: 350px 50px;
  background-color: ${css.color.charcoal};
  padding-top: 70px;
  @media (max-width: ${css.breakpoint.md}) {
    display: none;
  }
`;

const Copyright = styled.div`
  background-color: ${css.color.charcoal};
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
  font-size: 14px;
  font-family: ${css.typography.secondaryItalic};
`;

const StyledLink = styled(Link)`
  color: rgba(255, 255, 255, 0.6);
  font-family: ${css.typography.primary};
  font-size: 16px;
  transition: all 0.2s linear;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;
const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
    margin-bottom: 20px;
    padding-left: 40px;
  }
`;
const GridContainer = styled.div`
  margin: 0 auto;
  width: ${css.scaffold.widthLg};
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 350px 225px 225px auto;
`;
const Tagline = styled.div`
  padding-right: 70px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  p,
  h1,
  span {
    color: rgba(255, 255, 255, 0.2);
    font-weight: 500;
  }
  span {
    font-family: ${css.typography.primary};
    font-size: 13px;
  }
  h1 {
    font-family: ${css.typography.secondary};
    font-size: 25px;
    margin-bottom: 20px;
  }
  p {
    font-size: 15px;
    font-family: ${css.typography.secondaryItalic};
  }
`;

const Footer = () => (
  <Wrapper>
    <GridContainer>
      <Grid>
        <LinksColumn>
          <Tagline>
            <h1>Lee Nelson</h1>
            <p>Hand Crafted using React, Contentful and Gatsby.</p>
          </Tagline>
        </LinksColumn>
        <LinksColumn>
          <ul>
            <li>
              <StyledLink to="/work">Work</StyledLink>
            </li>
            <li>
              <StyledLink to="/work/medeo">Medeo</StyledLink>
            </li>
            <li>
              <StyledLink to="/work/qhr">QHR Technologies</StyledLink>
            </li>
            <li>
              <StyledLink to="/work/goodbits">Goodbits</StyledLink>
            </li>
          </ul>
        </LinksColumn>
        <LinksColumn>
          <ul>
            <li>
              <StyledLink to="/gallery">Gallery</StyledLink>
            </li>
            <li>
              <StyledLink to="/about">About</StyledLink>
            </li>
            <li>
              <StyledLink to="/contact">Contact</StyledLink>
            </li>
          </ul>
        </LinksColumn>
        <LinksColumn>
          <SocialLinks justifyContent="flex-end" />
        </LinksColumn>
      </Grid>
    </GridContainer>

    <Copyright>
      Proudly Canadian. Raised in Victoria, living in Vancouver.
    </Copyright>
  </Wrapper>
);

export default Footer;
