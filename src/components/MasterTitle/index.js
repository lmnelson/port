import React from "react";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const MasterTitle = ({ title, subtitle, backgroundImage }) => {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 180px;
    padding-bottom: 120px;
    padding-left: ${css.scaffold.mobileHorizontalPadding};
    padding-right: ${css.scaffold.mobileHorizontalPadding};
    position: relative;
    background: rgba(241, 20, 20, 1);
    @media (max-width: ${css.breakpoint.md}) {
      padding-top: 100px;
      padding-bottom: 60px;
    }
  `;
  const Title = styled.h1`
    text-align: center;
    font-size: 89px;
    color: #ffffff;
    max-width: 850px;
    font-weight: 700;
    letter-spacing: 1;
    font-family: ${css.typography.primaryBold};
    line-height: 1.2;
    margin-bottom: 0;
    @media (max-width: ${css.breakpoint.md}) {
      font-size: 63px;
    }
  `;
  const Subtitle = styled.p`
    text-align: center;
    font-family: ${css.typography.secondaryItalic};
    color: #fff;
    font-size: 21px;
    margin-bottom: 10px;
    margin-top: 10px;
    @media (max-width: ${css.breakpoint.md}) {
      margin-top: 0;
      font-size: 19px;
      padding: 0 20px;
    }
  `;

  return (
    <Wrapper>
      <Title>{title}</Title>
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : ""}
    </Wrapper>
  );
};

export default MasterTitle;
