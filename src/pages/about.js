import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import MasterTitle from "../components/MasterTitle";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import LeadParagraph from "../components/LeadParagraph";
import Testimonial from "../components/Testimonial";
import ContentWrapper from "../components/ContentWrapper";
import ImageBlock from "../components/ImageBlock";
import { cssVariables as css } from "../variables/cssvariables";

import imageBlock1 from "../images/medeo_computer.jpg";
import imageBlock2 from "../images/reading_phone_on_couch.jpg";
import gregBell from "../images/greg_bell_01.jpg";
import ashleaSpitz from "../images/ashlea_spitz_01.jpg";

const ImageBlocks = styled.div`
  margin-top: 50px;
`;

const AboutPage = () => (
  <div>
    <MasterTitle
      title="About"
      subtitle="For those who care to learn a little bit about me"
    />
    <ContentWrapper>
      <Container width={css.scaffold.widthSm}>
        <LeadParagraph>
          Chances are you already know my name but for those that don’t, my name
          is Lee and I’m currently a Senior Product Designer at Parsable. Thanks
          for taking a minute to learn more about me.
        </LeadParagraph>
        <p>
          My road to becoming a Product Designer started at the tender age of
          18, around the same time I landed my first residency as a DJ. In a
          measly attempt to create a brand for myself, I took a strange liking
          to stumbling my way through Photoshop and inadvertently learning what
          a div was in order to customize MySpace. The days of trial and error
          eventually led me to creating posters for nightlife events in my local
          hometown, Victoria BC, and inspired me to pursue my creative inklings.
        </p>
        <p>
          In 2010, I moved to Vancouver BC with intentions of turning my hobby
          into a career. I completed the Web Development and Design program at
          the British Columbia Institute of Technology and landed my first role
          in the industry as a Junior Web Developer and Designer when I was
          hired by PixSoul Media, an agency owned and operated by my Photoshop
          instructor, Ashlea Spitz.
        </p>
      </Container>
      <Container width={css.scaffold.widthMd}>
        <Testimonial
          quote="Lee can design and develop front end experiences that are world class. Lee has a keen eye for the details that make a great experience and is willing to invest the time to get things 'right'. He is a great team player and is able to work in a quickly changing environment which makes him a great asset to any software team."
          author="Ashlea Spitz"
          authorTitle="VP Software Development, Hootsuite"
          authorImage={ashleaSpitz}
        />
      </Container>
      <Container width={css.scaffold.widthSm}>
        <p>
          Since then, my time in the industry has been rewarding. Most of my
          time these days is spent musing about the intersection of business,
          design and development. I frequently tend to fill the role that
          bridges design and development and as a result, I’ve taken a keen
          interest in design systems and have a major appreciation for folks who
          try to improve the relationship between design and development.{" "}
        </p>
        <p>
          Since then, my time in the industry has been rewarding. Most of my
          time these days is spent musing about the intersection of business,
          design and development. I frequently tend to fill the role that
          bridges design and development and as a result, I’ve taken a keen
          interest in design systems and have a major appreciation for folks who
          try to improve the relationship between design and development.{" "}
        </p>
      </Container>
      <Container width={css.scaffold.widthMd}>
        <Testimonial
          quote="Lee can design and develop front end experiences that are world class. Lee has a keen eye for the details that make a great experience and is willing to invest the time to get things 'right'. He is a great team player and is able to work in a quickly changing environment which makes him a great asset to any software team."
          author="Greg Bell"
          authorTitle="VP Software Development, Hootsuite"
          authorImage={gregBell}
        />
      </Container>
    </ContentWrapper>
  </div>
);

export default AboutPage;
