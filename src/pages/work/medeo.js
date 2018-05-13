import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import ContentWrapper from "../../components/ContentWrapper";
import MasterTitle from "../../components/MasterTitle";
import SectionTitle from "../../components/SectionTitle";
import LeadParagraph from "../../components/LeadParagraph";
import Container from "../../components/Container";
import Image from "../../components/Image";
import ImageGrid from "../../components/ImageGrid";

import { cssVariables as css } from "../../variables/cssvariables";

import medeoDoc from "../../images/medeo_doc.jpg";
import earlyPatientChart from "../../images/medeo_early_patient_chart.png";
import earlyAppointments from "../../images/medeo_early_appointments.jpg";
import earlyVideo from "../../images/medeo_early_video_conference.png";

const Medeo = () => (
  <div>
    <MasterTitle
      title="Medeo"
      subtitle="Canada's most popular virtual care application"
    />
    <ContentWrapper>
      <Container width={css.scaffold.widthSm}>
        <LeadParagraph>
          Medeo is a virtual care application that allows patients and
          practitioners to communicate securely through video conferencing,
          messaging and chat. It was first developed in 2012 and soon became
          Canada’s most popular virtual care application. Medeo won the Best
          Concept Award from Small Business BC in 2014 and was acquired by{" "}
          <a href="">QHR Technologies</a> later that year.
        </LeadParagraph>
        <p>
          I joined Medeo in 2013 as the 12th employee and 1st in-house designer.
          Customary to small teams, I wore a magnitude of hats.
        </p>
        <p>
          In 2014, company executives made a big decision that changed the
          company’s business model and would require building a new product from
          scratch. In less than 5 months, our small team had to deliver a
          minimum viable product that required the following set of features to
          be successful: appointments, real time chat, video conferencing,
          notes, patient chart, secure messaging.
        </p>
      </Container>
      <Container width={css.scaffold.widthXlg}>
        <Image
          noBorder
          citation="Physician using Medeo"
          imageUrl={medeoDoc}
          marginTop="20px"
          marginBottom="50px"
        />
      </Container>
      <Container width={css.scaffold.widthSm}>
        <p>
          As an Interaction Designer, my main responsibility was to ensure that
          the user experience was intuitive for both practitioners and patients.
          During the next 5 months, I worked closely with the Product Manager
          and CTO to refine requirements. I spoke with our Medical Advisory
          Board to get a better understanding of our end users goals. I tested
          prototypes with practitioners, patients and medical office assistants
          to validate assumptions. I worked closely with the Scrum team to make
          sure implementation met design standards.
        </p>
      </Container>
      <Container width={css.scaffold.widthMd}>
        <ImageGrid gridGap="50px" columnWidths="auto">
          <Image
            citation="Early Patient Chart concept"
            imageUrl={earlyPatientChart}
            marginTop="20px"
          />
          <Image
            citation="Early Appointments concept"
            imageUrl={earlyAppointments}
          />
          <Image
            citation="Early Video Conferencing concept"
            imageUrl={earlyVideo}
          />
        </ImageGrid>
      </Container>
    </ContentWrapper>
  </div>
);

export default Medeo;
