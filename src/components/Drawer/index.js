import React from "react";
import { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { cssVariables as css } from "../../variables/cssvariables";

import closeIcon from "../../images/icons8-delete_sign_filled.svg";

export default class Drawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Actions = styled.div`
      display: flex;
      padding: 30px;
      justify-content: flex-end;
    `;
    const DrawerToggle = styled.button`
      width: 44px;
    `;
    const Nav = styled.nav``;
    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      transition: all 0.5s linear;
      height: 100%;
      width: 300px;
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
      margin-right: ${this.props.drawerIsVisible ? `0` : `-400px`};
      background-color: #fff;
      overflow-x: hidden;
      box-shadow: -10px 0 40px rgba(0, 0, 0, 0.3);
    `;
    const StyledLink = styled(Link)`
      color: rgba(255, 255, 255, 0.6);
      font-family: ${css.typography.primary};
      font-size: 16px;
      transition: all 0.2s linear;
      &:hover {
        color: #fff;
        text-decoration: none;
      }
    `;

    return (
      <Wrapper>
        <Actions>
          <DrawerToggle onClick={this.props.handler}>
            <img src={closeIcon} />
          </DrawerToggle>
        </Actions>
        <Nav>
          <ul>
            <li>
              <StyledLink to="/work">Work</StyledLink>
            </li>
            <li>
              <StyledLink to="/work/medeo">Medeo</StyledLink>
            </li>
            <li>
              <StyledLink to="/work/qhr">QHR Technologies</StyledLink>
            </li>
            <li>
              <StyledLink to="/work/goodbits">Goodbits</StyledLink>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    );
  }
}
