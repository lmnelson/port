import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import MasterTitle from "../components/MasterTitle";
import SkinnyContainer from "../components/SkinnyContainer";
import SectionTitle from "../components/SectionTitle";

const ContentWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  padding-top: 70px;
`;

const AboutPage = () => (
  <div>
    <MasterTitle title="About Me" />
    <ContentWrapper>
      <SkinnyContainer>
        <SectionTitle title="01.History" />
      </SkinnyContainer>
    </ContentWrapper>
  </div>
);

export default AboutPage;
