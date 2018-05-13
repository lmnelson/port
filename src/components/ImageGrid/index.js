import React from "react";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const ImageGrid = ({ children, gridGap, columnWidths }) => {
  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: ${columnWidths};
    grid-gap: ${gridGap};
    @media (max-width: ${css.breakpoint.md}) {
      grid-gap: 30px;
    }
  `;
  return <Wrapper>{children}</Wrapper>;
};

export default ImageGrid;
