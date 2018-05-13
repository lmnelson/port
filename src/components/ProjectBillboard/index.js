import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Button from "../Button";
import { cssVariables as css } from "../../variables/cssvariables";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 90px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 40px;
  @media (max-width: ${css.breakpoint.md}) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
const Text = styled.div`
  flex-basis: 55%;
  padding-right: 60px;
  @media (max-width: ${css.breakpoint.md}) {
    padding-right: 0;
  }
`;
const Image = styled.div`
  flex-basis: 45%;
  padding: 10px;
  border: 1px solid #ddd;
  @media (max-width: ${css.breakpoint.md}) {
    margin-top: 20px;
  }
  img {
    display: flex;
  }
`;
const Meta = styled.div`
  margin-bottom: 15px;
  color: ${css.color.grey};
  font-size: 16px;
`;
const Date = styled.span`
  font-family: ${css.typography.secondary};
`;
const Aquired = styled.span`
  font-family: ${css.typography.secondaryItalic};
  margin-left: 5px;
`;
const Title = styled.h1`
  font-size: 42px;
  font-family: ${css.typography.primaryBold};
  margin-bottom: 0;
  line-height: 1.2;
`;
const Role = styled.p`
  font-size: 18px;
  font-family: ${css.typography.primary};
  line-height: 1;
  margin-top: 0;
`;
const Description = styled.div`
  p {
    margin-bottom: 0;
  }
`;

const ProjectBillboard = ({
  date,
  aquired,
  title,
  role,
  children,
  image,
  linkTo
}) => (
  <Wrapper>
    <Meta>
      <Date>{date}</Date>
      <Aquired>• Acquired</Aquired>
    </Meta>
    <Content>
      <Text>
        <Title>{title}</Title>
        <Role>{role}</Role>
        <Description>{children}</Description>
      </Text>
      <Image>
        <img src={image} />
      </Image>
    </Content>
    <Button to={linkTo} text="View Project" />
  </Wrapper>
);

export default ProjectBillboard;
