import React, { useContext } from 'react';
import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { LoginContext } from '../context/Login';
import { useAuth0 } from '@auth0/auth0-react';
import Logout from '../auth/Logout';

function Header() {
  const { isAuthenticated } = useAuth0();
  const {
    isDemoAccount,
    toggleLoginModal,
    handleDemoLogout,
    handleProfilePage,
  } = useContext(LoginContext);

  return (
    <Navbar
      id='header-navbar'
      fixed='top'
      expand='lg'
      className='bg-body-tertiary header'
    >
      <Container fluid>
        <Navbar.Brand as={Link} to='/' id='brand-name'>
          <img id='brand-image' src='../../images/cookbot-logo.png' />
          <h2>CookBot AI</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
          </Nav>
          <div className='header-links'>
            {!isDemoAccount && !isAuthenticated && (
              <Button id='create-button' onClick={toggleLoginModal}>
                Create a recipe
              </Button>
            )}
            {isAuthenticated && (
              <div id='logout-button'>
                <Link className='nav-link' to='/Profile'>
                  <Button id='profile-button'>Welcome</Button>
                </Link>
                <Logout />
              </div>
            )}
            {isDemoAccount && (
              <div id='logout-button'>
                <Link className='nav-link' to='/DemoAccount'>
                  <Button id='profile-button' onClick={handleProfilePage}>
                    Welcome
                  </Button>
                </Link>
                <Button
                  id='logout-style-button'
                  onClick={handleDemoLogout}
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
