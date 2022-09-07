import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar expand="lg" bg="light">
        <Container>
          <Navbar.Brand>Movie Shop</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
