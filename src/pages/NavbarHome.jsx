import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaUserCircle  } from 'react-icons/fa';

const NavBarHome = () => {
  return(
    <Navbar expand="lg" className="border-bottom px-3">
      <Navbar.Brand href="/home">
        <img src="src\pages\images\logo-ufra.png" alt="UFRA Logo" height="40" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/home">HOME</Nav.Link>
          <Nav.Link href="/upload">CONTRIBUIÇÃO</Nav.Link>
          <Nav.Link href="/home">SOBRE</Nav.Link>
        </Nav>
        <Button variant="outline-success" className="ms-3 d-flex align-items-center">
          <FaUserCircle className="me-1" /> Vanessa 
        </Button>
      </Navbar.Collapse>
   </Navbar>
  )
}

export default NavBarHome