import React from "react";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10rem;
  background: linear-gradient(
    to bottom,
    ${css.color.purple} 0,
    #7b35ff 70%,
    #ffffff 70%,
    #ffffff 100%
  );
`;
const Title = styled.h1`
  text-align: center;
  margin-top: 3rem;
  font-size: 6.4rem;
  color: #ffffff;
  max-width: 850px;
  font-weight: 500;
  letter-spacing: 1;
  font-family: ${css.typography.secondary};
`;
const Subtitle = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: #ffffff;
`;
const HeroImage = styled.div`
  width: 850px;
  margin: 4rem auto;
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
