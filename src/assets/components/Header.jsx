import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import AuthButtons from '../Auth_Folder/AuthButtons';

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
          <AuthButtons />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;