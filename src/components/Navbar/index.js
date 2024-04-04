import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Navbarr() {
  const history = useNavigate();

  const handleLogout = () => {
    history('/');
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary main-navbar">
      <Container fluid>
        <Navbar.Brand href="#">Education 4.0</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            {/* Home route */}
            <Nav.Link as={Link} to="/welcome">Home</Nav.Link>
            {/* Alphabets route */}
            <Nav.Link as={Link} to="/abcd-paint">Alphabets</Nav.Link>
            {/* Numbers route */}
            <Nav.Link as={Link} to="/num-paint">Numbers</Nav.Link>
          </Nav>
          <Nav className="my-4 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            {/* Logout button */}
            <Button variant="outline-success" onClick={handleLogout}>Log out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
