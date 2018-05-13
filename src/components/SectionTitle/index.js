import React from "react";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const Title = styled.div`
  color: ${css.color.red};
  font-family: ${css.typography.primary};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.5px;
  margin-bottom: 40px;
  margin-top: 0;
`;

const SectionTitle = props => <Title>{props.title}</Title>;

export default SectionTitle;
