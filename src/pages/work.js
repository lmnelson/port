import React from "react";
import Link from "gatsby-link";
import MasterTitle from "../components/MasterTitle";
import ContentWrapper from "../components/ContentWrapper";
import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";
import ProjectBillboard from "../components/ProjectBillboard";

import medeo from "../images/medeo_01.jpeg";
import goodbits from "../images/reading_phone_on_couch.jpg";
import qhr from "../images/qhr_ebooking.jpeg";

import { cssVariables as css } from "../variables/cssvariables";

const CaseStudiesPage = () => (
  <div>
    <MasterTitle
      title="Work"
      subtitle="A collection of projects I was fortunate enough to work on."
      backgroundImage={qhr}
    />
    <ContentWrapper>
      <Container width={css.scaffold.widthLg}>
        <ProjectBillboard
          title="Medeo"
          role="Interaction Designer"
          date="May 2013 - Dec 2014"
          aquired
          linkTo="/work/medeo"
          image={medeo}
        >
          <p>
            In 2013 I joined Medeo as the 12th employee and 1st designer. Medeo
            was to become Canada’s most popular virtual health care application
            and was a pioneer in the industry. In 2014 a new platform was built
            from the ground up that facilitated paramount experiences for
            patients and practitioners. Learn more about my role in transforming
            Canada’s health care industy.
          </p>
        </ProjectBillboard>
        <ProjectBillboard
          title="QHR Technologies"
          role="Interaction Designer"
          date="May 2013 - Dec 2014"
          aquired
          linkTo="/work/qhr"
          image={qhr}
        >
          <p>
            QHR is responsible for building Accuro, Canada’s largest
            single-platform EMR. Accuro is used and trusted by over 10,000
            practitioners daily. I joined QHR Technologies in 2015 as a result
            of their decision to acquire Medeo. The acquisition was part of an
            effort to being building better services for patients and to
            integrate with their existing and extremely successful, EMR. Learn
            more about how I contributed to their vision.
          </p>
        </ProjectBillboard>
        <ProjectBillboard
          title="Goodbits"
          role="Interaction Designer"
          date="May 2013 - Dec 2014"
          aquired
          linkTo="/work/goodbits"
          image={goodbits}
        >
          <p>
            In 2013 I joined Medeo as the 12th employee and 1st designer. Medeo
            was to become Canada’s most popular virtual health care application
            and was a pioneer in the industry. In 2014 a new platform was built
            from the ground up that facilitated paramount experiences for
            patients and practitioners. Learn more about my role in transforming
            Canada’s health care industy.
          </p>
        </ProjectBillboard>
      </Container>
    </ContentWrapper>
  </div>
);

export default CaseStudiesPage;
