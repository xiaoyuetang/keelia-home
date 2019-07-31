import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Container,
  Col,
  Row,
  Button
} from "shards-react";

import logo from "../../images/logo.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Col className="NavBarMain">
        <Nav justified>
          <a href="/">
            <img className="logo" src={logo} alr="logo" />
          </a>
          <NavItem>
            <NavLink href="/aboutme" className="NavLink">
              <b>ABOUT ME</b>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/mywork" className="NavLink">
              <b>MY WORK</b>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contactme" className="NavLink">
              <b>CONTACT ME</b>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog" className="NavLink">
              <b>BLOG</b>
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
    );
  }
}

export default NavBar;
