import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import logo from "../../images/logo.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar>
        <Navbar.Brand href="/">
          <img className="logo" src={logo} alr="logo" />
        </Navbar.Brand>
        <NavDropdown title="welcome" size="lg" className="NavDropdownM">
          <NavDropdown.Item href="/aboutme">ABOUT ME</NavDropdown.Item>
          <NavDropdown.Item href="/mywork">MY WORK</NavDropdown.Item>
          <NavDropdown.Item href="/contactme">CONTACT ME</NavDropdown.Item>
          <NavDropdown.Item href="/blog">BLOG</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    );
  }
}

export default NavBar;
