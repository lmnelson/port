import React from "react";
import Link from "gatsby-link";
import Hero from "../components/Hero";
import goodbitsHero from "../images/goodbits-hero-computer.png";

const CaseStudiesPage = () => (
  <div>
    <Hero
      subtitle="- Goodbits.io -"
      title="Web App for Building and Sending Engaging Email"
      image={goodbitsHero}
    />
  </div>
);

export default CaseStudiesPage;
