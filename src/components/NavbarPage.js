import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import logo from "../../assets/img/gmaps/driver.png";

const NavbarPage = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="">
          <Nav.Link href="/home">Home</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto right">
            <Nav.Link href="/home">Data</Nav.Link>
            <Nav.Link href="/tampilangrafik">Grafik</Nav.Link>
            <Nav.Link href="/tampilanhari">Filter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPage;
