import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import MasterTitle from "../components/MasterTitle";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

import { cssVariables as css } from "../variables/cssvariables";

const ContactPage = () => (
  <div>
    <MasterTitle
      title="Contact"
      subtitle="I'm always open to meeting new industry folks"
    />
    <ContentWrapper>
      <Container width={css.scaffold.widthLg}>
        <p>Text goes here</p>
      </Container>
    </ContentWrapper>
  </div>
);

export default ContactPage;
