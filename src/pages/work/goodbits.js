import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import ContentWrapper from "../../components/ContentWrapper";
import SectionTitle from "../../components/SectionTitle";
import MasterTitle from "../../components/MasterTitle";
import LeadParagraph from "../../components/LeadParagraph";
import Container from "../../components/Container";
import Image from "../../components/Image";
import ImageGrid from "../../components/ImageGrid";

import { cssVariables as css } from "../../variables/cssvariables";

import header from "../../images/goodbits_header.png";
import goodbitsBuilder from "../../images/goodbits_builder.jpg";
import goodbitsBuilderClose from "../../images/goodbits_builder_close.jpg";
import goodbitsEmail from "../../images/goodbits_email.jpg";
import moleskin1 from "../../images/moleskin_1.jpg";
import moleskin3 from "../../images/moleskin_3.jpg";

const Goodbits = () => (
  <div>
    <MasterTitle
      title="Goodbits"
      subtitle="Enabling professionals to build beautiful looking emails in mintues"
    />
    <ContentWrapper>
      <Container width={css.scaffold.widthSm}>
        <LeadParagraph>Goodbits</LeadParagraph>
      </Container>
      <Container width={css.scaffold.widthLg}>
        <Image
          citation="Goodbits interface"
          imageUrl={header}
          marginTop="20px"
          marginBottom="50px"
        />
      </Container>
      <Container width={css.scaffold.widthSm}>
        <p>
          In 2015, I began working with QHR as a result of Medeo being acquired.
          My new responsibilities were to begin working on a patient platform
          that would integrate with AcurroEMR and provide patients with a suite
          of online services. The first feature of the platform was to be online
          booking. My remaining time at QHR was spent working on an online
          e-booking system that would allow patients to book appointments online
          with their physicians.
        </p>
        <p>
          My duties started by conducting research and gathering information on
          existing ebooking solutions. Public data on ebooking was available
          thanks to trials that had been conducted with clinics in both Ontario
          and Quebec. The results were made public on Infoway. This was a great
          start to see which features proved to be valuable and where we could
          capitalize on any of the pitfalls.
        </p>
      </Container>
      <Container width={css.scaffold.widthLg}>
        <ImageGrid columnWidths="auto auto " gridGap="30px">
          <Image marginBottom="60px" marginTop="20px" imageUrl={moleskin1} />
          <Image marginBottom="60px" marginTop="20px" imageUrl={moleskin3} />
        </ImageGrid>
      </Container>
      <Container width={css.scaffold.widthSm}>
        <p>
          The next part of my journey involved gathering requirements. I needed
          to get a better understanding of Accuro, and how practitioners used
          Accuro in their practices. I also needed to know what information was
          required in order to book an appointment and what would be essential
          to our initial MVP. Another important limitation that needed discovery
          was the technical constraints of integrating with AcurroEMR and
          whether or not that would impact design.
        </p>
        <p>
          After requirements were further set in stone, the iterative design
          process began. Research concluded that the majority of our users would
          be booking appointments using a mobile device, so a mobile first
          approach was adopted when designing. As per usual, a number of
          different concepts were created, critiqued and tested before aligning
          on a solution that would be our initial implementation.
        </p>
        <p>
          I would eventually choose to move on from QHR before the ebooking
          solution was completely implemented but I’m very proud of the work
          that the team put forth in the months after my departure. Medeo
          Ebooking is currently being used by hundreds of practices nationwide
          and is responsible for thousands appointments.
        </p>
      </Container>
      <Container width={css.scaffold.widthLg}>
        <ImageGrid columnWidths="auto">
          <Image
            marginTop="30px"
            marginBottom="20px"
            citation="Goodbits interface"
            imageUrl={goodbitsBuilderClose}
          />
        </ImageGrid>
      </Container>
    </ContentWrapper>
  </div>
);

export default Goodbits;
