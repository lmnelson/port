import React from "react";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";
import quote from "../../images/quote_02.svg";

const Wrapper = styled.div`
  padding: 40px 75px 40px 80px;
  position: relative;
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
  margin-bottom: 60px;
  margin-top: 20px;
  @media (max-width: ${css.breakpoint.md}) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 30px;
    margin-bottom: 40px;
  }
  &:after {
    content: "";
    display: block;
    width: 40px;
    height: 40px;
    background-image: url(${quote});
    background-color: ${css.color.red};
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    top: 0;
  }
`;
const QuoteContent = styled.div`
  flex-direction: column;
`;
const Quote = styled.p`
  font-size: 21px;
  color: ${css.color.charcoal};
  font-family: ${css.typography.secondaryItalic};
  margin-bottom: 30px;
  margin-top: 0;
`;
const Author = styled.p`
  font-size: 14px;
  font-family: ${css.typography.primaryBold};
  font-weight: 600;
  margin-bottom: 0;
`;
const AuthorImage = styled.div`
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  margin-right: 45px;
  border-radius: 100px;
  @media (max-width: ${css.breakpoint.md}) {
    margin-right: 0;
    margin-bottom: 25px;
  }
  img {
    display: block;
    border-radius: 100px;
    max-width: 100%;
  }
`;
const AuthorTitle = styled.p`
  font-family: ${css.typography.primary};
  color: ${css.color.grey};
  font-size: 14px;
  margin-bottom: 0;
  margin-top: 0;
`;

const Testimonial = ({ quote, author, authorImage, authorTitle }) => (
  <Wrapper>
    <AuthorImage>
      <img src={authorImage} />
    </AuthorImage>
    <QuoteContent>
      <Quote>{quote}</Quote>
      <Author>{author}</Author>
      <AuthorTitle>{authorTitle}</AuthorTitle>
    </QuoteContent>
  </Wrapper>
);

export default Testimonial;
