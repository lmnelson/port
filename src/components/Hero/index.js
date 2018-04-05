import React from "react";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10rem;
  background: linear-gradient(
      -8deg,
      transparent 0,
      transparent 32%,
      ${css.color.purple} 32%,
      ${css.color.purple} 100%
    ),
    linear-gradient(${css.color.lightGrey} 0, #ffffff 100%);
`;
const Title = styled.h1`
  text-align: center;
  font-size: 6.4rem;
  color: #ffffff;
  max-width: 850px;
  font-weight: 500;
  letter-spacing: 1;
  font-family: ${css.typography.primary};
  font-weight: 700;
  line-height: 1.2;
`;
const Subtitle = styled.p`
  text-align: center;
  font-size: 1.9rem;
  margin-bottom: 2rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.5);
  font-family: ${css.typography.secondary};
`;
const HeroImage = styled.div`
  width: 750px;
  margin: 9rem auto;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.1));
`;

const Hero = props => (
  <HeroWrapper>
    <Subtitle>{props.subtitle}</Subtitle>
    <Title>{props.title}</Title>
    <HeroImage>
      <img src={props.image} alt="foo" />
    </HeroImage>
  </HeroWrapper>
);

export default Hero;
