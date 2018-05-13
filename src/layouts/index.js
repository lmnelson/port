import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import GlobalNav from "../components/GlobalNav";
import Footer from "../components/Footer";
import "./index.css";
import { cssVariables as css } from "../variables/cssvariables";

const Wrapper = styled.div`
  max-width: ${css.scaffold.widthMax};
  margin: 0 auto;
`;
const Content = styled.div`
  background-color: #fff;
`;

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet
      title="About"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <GlobalNav />
    <Content>{children()}</Content>
    <Footer />
  </Wrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
