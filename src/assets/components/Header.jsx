import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import AuthButtons from '../../Auth_Folder/AuthButtons';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand
          style={{ margin:" 0 10%" }}
          href="/"
        >
          Welcome to CookBot!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/About.jsx">About Us</Nav.Link>
            <Nav.Link href="/Profile.jsx">Profile</Nav.Link>
          </Nav>
          <AuthButtons />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;