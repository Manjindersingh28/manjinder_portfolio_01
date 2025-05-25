import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CustomNavbar() {
  return (
    <div><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

    <Container>
      <Navbar.Brand href="#home">Manjinder Singh</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <NavDropdown title="Projects" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Project 2
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
            <NavDropdown.Divider />
           
          </NavDropdown>
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default CustomNavbar