import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import GlobalNav from "../components/GlobalNav";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import "./index.css";
import { cssVariables as css } from "../variables/cssvariables";

const Wrapper = styled.div`
  width: ${css.scaffold.widthMax};
  margin: 0 auto;
`;
const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Content = styled.div`
  background-color: #fff;
`;

export default class TemplateWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerIsVisible: false
    };
    this.handler = this.handler.bind(this);
  }

  handler(e) {
    e.preventDefault();
    this.setState({
      drawerIsVisible: !this.state.drawerIsVisible
    });
  }

  render() {
    return (
      <PageWrapper>
        <Wrapper drawerIsVisible={this.state.drawerIsVisible}>
          <Helmet
            title="About"
            meta={[
              { name: "description", content: "Sample" },
              { name: "keywords", content: "sample, something" }
            ]}
          />
          <GlobalNav handler={this.handler} />
          <Content>{this.props.children()}</Content>
          <Footer />
        </Wrapper>
        <Drawer
          drawerIsVisible={this.state.drawerIsVisible}
          handler={this.handler}
        />
      </PageWrapper>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};
