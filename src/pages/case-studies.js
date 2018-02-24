import React from "react";
import Link from "gatsby-link";
import Hero from "../components/Hero";
import goodbitsHero from "../images/goodbits-hero-computer.png";

const CaseStudiesPage = () => (
  <div>
    <Hero
      title="A Platform for Building and Sending Beautiful Emails"
      subtitle="- Goodbits -"
      image={goodbitsHero}
    />
  </div>
);

export default CaseStudiesPage;
