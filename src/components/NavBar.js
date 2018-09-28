import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">Travelgram</NavLink>
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
