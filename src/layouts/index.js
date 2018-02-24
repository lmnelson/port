import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="About"
      link={[
        {
          href: "https://fonts.googleapis.com/css?family=Noticia+Text:400,700"
        },
        { rel: "stylesheet" }
      ]}
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
