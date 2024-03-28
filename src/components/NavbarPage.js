import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Swal from "sweetalert2";


const NavbarPage = () => {

  const users = JSON.parse(sessionStorage.getItem("users"));

   function logout(event) {
     event.preventDefault();
     Swal.fire({
       title: "Logout",
       text: "Apakah Anda yakin ingin keluar?",
       icon: "question",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Ya",
       cancelButtonText: "Tidak",
     }).then((result) => {
       if (result.isConfirmed) {
         sessionStorage.removeItem("users");
         Swal.fire("Okay", "Logout Berhasil", "success").then(() => {
           window.location.href = "/";
         });
       }
     });
   }

  return (
    <div className="mb-4">
      <Container>
        <Navbar expand="lg">
        {users ? (
          <Navbar.Brand href="/home">Home</Navbar.Brand>
        ) : null}
          {users ? (
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        ) : null}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto right">
              {users ? (
                <>
                  <Nav.Link href="/riwayat-status-brankas">Status Brankas</Nav.Link>
                  <Nav.Link href="/riwayat-pin">Riwayat PIN</Nav.Link>
                  {/* <Nav.Link href="/data-enkripsi">Data Enkripsi</Nav.Link> */}
                  {/* <Nav.Link href="/data-filter">Data Filter</Nav.Link> */}

                  <NavDropdown
                    title={<span style={{ color: "black" }}>{users.name}</span>}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item
                      href="/login"
                      onClick={(event) => logout(event)}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  {/* <Nav.Link href="/">Login</Nav.Link> */}
                  {/* <Nav.Link href="/register">Register</Nav.Link> */}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavbarPage;
