import React from "react";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-color: ${css.color.red};
`;
const Title = styled.h1`
  text-align: center;
  font-size: 76px;
  color: #ffffff;
  max-width: 850px;
  font-weight: 700;
  letter-spacing: 1;
  font-family: "Soleil Bold";
  line-height: 1.2;
`;

const MasterTitle = props => (
  <Wrapper>
    <Title>{props.title}</Title>
  </Wrapper>
);

export default MasterTitle;
