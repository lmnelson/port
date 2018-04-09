import React from "react";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const Title = styled.div`
  color: ${css.color.red};
  font-family: "Soleil Bold";
  text-transform: uppercase;
  font-size: 15px;
  margin-bottom: 30px;
  margin-top: 10px;
`;

const SectionTitle = props => <Title>{props.title}</Title>;

export default SectionTitle;
