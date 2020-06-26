import React from "react";
import {
  Nav,
  Form,
  FormControl,
  Button,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav2 = () => {
  return (
    <Navbar sticky="top" expand="lg" className="nav" activeKey="/home">
      <Navbar.Brand href="#home" style={{ color: "#fff" }}>
        Sabbasachi
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-list">
          <Nav.Link href="#home">
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link href="#link">
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link href="#link">
            <Link to="/projects">Projects</Link>
          </Nav.Link>
          <Nav.Link href="#link">
            <Link to="/blog">Blog</Link>
          </Nav.Link>
          <Nav.Link href="#link">
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav2;
