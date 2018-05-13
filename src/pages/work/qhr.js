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

import womanEBooking from "../../images/booking_appt.jpg";
import devices from "../../images/ebooking_devices_02.jpeg";
import wireframes from "../../images/ebooking_wireframes.jpg";
import pic01 from "../../images/ebooking_computer.jpeg";
import pic02 from "../../images/qhr_ebooking_mobile_woman.jpeg";
import pic03 from "../../images/qhr_ebooking.jpeg";
import pic04 from "../../images/clinic-date.png";

const Qhr = () => (
  <div>
    <MasterTitle
      title="QHR Tech."
      subtitle="Canada’s largest single-platform EMR"
    />
    <ContentWrapper>
      <Container width={css.scaffold.widthSm}>
        <LeadParagraph>
          QHR is a Canadian Healthcare Technology Company which owns and
          operates AcurroEMR and Medeo. Acurro is Canada’s largest
          single-platform EMR and is used by over 10,000 physicians daily. Medeo
          is one of Canada’s leading virtual care solutions and is used by over
          600 physicians daily. QHR was acquired by Loblaw Companies in August,
          2016.
        </LeadParagraph>
        <p>
          In 2015, I began working with QHR as a result of Medeo being acquired.
          My new responsibilities were to begin working on a patient platform
          that would integrate with AcurroEMR and provide patients with a suite
          of online services. The first feature of the platform was to be online
          booking. My remaining time at QHR was spent working on an online
          e-booking system that would allow patients to book appointments online
          with their physicians.
        </p>
      </Container>
      <Container width={css.scaffold.widthLg}>
        <Image
          marginBottom="50px"
          marginTop="10px"
          citation="Patient booking an appointment online"
          imageUrl={womanEBooking}
        />
      </Container>
      <Container width={css.scaffold.widthSm}>
        <p>
          My duties started by conducting research and gathering information on
          existing ebooking solutions. Public data on ebooking was available
          thanks to trials that had been conducted with clinics in both Ontario
          and Quebec. The results were made public on Infoway. This was a great
          start to see which features proved to be valuable and where we could
          capitalize on any of the pitfalls.
        </p>
        <p>
          The next part of my journey involved gathering requirements. I needed
          to get a better understanding of Accuro, and how practitioners used
          Accuro in their practices. I also needed to know what information was
          required in order to book an appointment and what would be essential
          to our initial MVP. Another important limitation that needed discovery
          was the technical constraints of integrating with AcurroEMR and
          whether or not that would impact design.
        </p>
      </Container>
      <Container width={css.scaffold.widthLg}>
        <Image imageUrl={wireframes} noBorder />
      </Container>
      <Container width={css.scaffold.widthSm}>
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
    </ContentWrapper>
  </div>
);

export default Qhr;
