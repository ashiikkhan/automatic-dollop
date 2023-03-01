import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <>
      <Navbar bg="transperant" expand="lg" className="mb-2 container">
        <Container fluid>
          <Navbar.Brand href="#">
            <h2 className="text-dark">authLab</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$  `} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-$  `}
            aria-labelledby={`offcanvasNavbarLabel-expand-$  `}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$  `}>
                authLab
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-2 fs-5">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action2">Team</Nav.Link>
                <Nav.Link href="#action2">Articles</Nav.Link>
                <Nav.Link href="#action2">Jobs</Nav.Link>
                <Nav.Link href="#action2">Contacts</Nav.Link>
              </Nav>
              {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
