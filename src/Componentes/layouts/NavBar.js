import React from "react";
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";


export default function NavBar (){
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Florecer Tienda</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Hombre</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Mujer</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    )

}