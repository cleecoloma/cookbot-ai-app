import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';


class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Welcome to CookBot!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
          <Button variant="outline-success" href="/add-recipe">Add New Recipe</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
// export default withAuth0(Header);