import React from 'react';
import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar id='header-navbar' fixed='top' expand='lg' className='bg-body-tertiary header'>
      <Container fluid>
        <Navbar.Brand as={Link} to='/' id='brand-name'>
          <img id='brand-image' src='../../images/cookbot-logo.png' />
          <h2>CookBot AI</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <div>
              <Button id='create-button'>Create a recipe</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
