import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

const Wrapper = styled(Link)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  text-decoration: none;
  max-width: 400px;
`;

const Image = styled.div`
  position: relative;
  content: "";
  &:after {
    z-index: 1;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: rgba(0, 0, 0, 0.1); */
  }
  img {
    display: flex;
    max-width: 100%;
  }
`;
const Text = styled.p`
  padding: 30px;
  color: ${css.color.red};
  margin: 0;
  border-bottom: 4px solid ${css.color.red};
  font-size: 19px;
  font-family: ${css.typography.primary};
  font-weight: 600;
`;

const ImageBlock = ({ image, title, ...rest }) => (
  <Wrapper {...rest}>
    <Image>
      <img src={image} />
    </Image>
    <Text>{title}</Text>
  </Wrapper>
);

export default ImageBlock;
