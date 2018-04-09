import React from "react";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto;
`;

const SkinnyContainer = ({ children }) => <Wrapper>{children}</Wrapper>;

export default SkinnyContainer;
