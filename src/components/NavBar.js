import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">TRAVELGRAM</NavLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem href="/trips">Trips</NavItem>
        <NavItem href="/places">Places</NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
