import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="warning">
        <Container>
          <Navbar.Brand>Movie Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* <div className="d-flex">
            <Searchbox />
          </div> */}
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link>
                <i class="fa-solid fa-cart-shopping"></i>
              </Nav.Link>
              <NavDropdown>
                <NavDropdown.Item href="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <i class="fa-solid fa-user"></i>Sign In
              </Nav.Link>
              <NavDropdown title="Admin" id="Admin">
                <NavDropdown.Item href="/admin/users">
                  Users
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/orders">
                  Orders
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/products">
                  Products
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
