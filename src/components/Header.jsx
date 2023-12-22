import React from 'react';
import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logout from '../auth/Logout';
import { withAuth0 } from '@auth0/auth0-react';

function Header(props) {
  const { isAuthenticated } = props.auth0;

  return (
    <>
      <Navbar fixed='top' expand='lg' className='bg-body-tertiary header'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/' id='brand-name'>
            <img id='brand-image' src='../../images/cookbot-logo.png' />
            <h2>CookBot AI</h2>
          </Navbar.Brand>
          <Nav id='navigation-links' className='me-auto' variant='underline'>
            <Nav.Link href='#home' className='header-links'>
              Home
            </Nav.Link>
            <Nav.Link href='#recipebook' className='header-links'>
             My Recipes
            </Nav.Link>
          </Nav>
          {props.isDemoAccount && (
            <div className='header-buttons'>
              <Link className='nav-link' to='/DemoAccount'>
                <Button id='profile-button'>Welcome</Button>
              </Link>

              <div>
                <Button
                  id='logout-style-button'
                  onClick={() => props.handleDemoLogout()}
                >
                  Logout
                </Button>
              </div>
            </div>
          )}
          {isAuthenticated && (
            <div className='header-buttons'>
              <Link className='nav-link' to='/Profile'>
                <Button
                  id='profile-button'
                  onClick={() => props.handleProfilePage()}
                >
                  Welcome
                </Button>
              </Link>
              <Logout />
            </div>
          )}
          {!isAuthenticated && !props.isDemoAccount ? (
            <div>
              <Button
                id='create-button'
                onClick={() => {
                  props.toggleLoginModal();
                }}
              >
                Create a recipe
              </Button>
            </div>
          ) : null}
        </Container>
      </Navbar>
    </>
  );
}

const namedHeader = withAuth0(Header);

export default namedHeader;
