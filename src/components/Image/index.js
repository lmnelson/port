import React from "react";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const Image = ({ imageUrl, citation, marginTop, marginBottom, noBorder }) => {
  const Wrapper = styled.div`
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
  `;
  const ImageWrapper = styled.div`
    padding: 10px;
    border: ${noBorder ? "none" : "1px solid #ddd"};
    img {
      display: flex;
      max-width: 100%;
    }
  `;
  const Citation = styled.p`
    margin-bottom: 0;
    margin-top: 10px;
    font-size: 16px;
    font-family: ${css.typography.secondaryItalic};
    color: ${css.color.grey};
    text-align: center;
    @media (max-width: ${css.breakpoint.md}) {
      font-size: 15px;
    }
  `;

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={imageUrl} />
      </ImageWrapper>
      {citation ? <Citation>- {citation} -</Citation> : ""}
    </Wrapper>
  );
};

export default Image;
