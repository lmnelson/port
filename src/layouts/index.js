import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import GlobalNav from "../components/GlobalNav";
import Footer from "../components/Footer";
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
    <GlobalNav />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
