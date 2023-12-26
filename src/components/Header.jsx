import React, { useEffect, useContext } from 'react';
import '../styles/Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { LoginContext } from '../context/Login';
import { useAuth0 } from '@auth0/auth0-react';
import Logout from '../auth/Logout';

function Header() {
  const { isAuthenticated } = useAuth0();
  const {
    loggedUser,
    isDemoAccount,
    toggleLoginModal,
    handleDemoLogout,
    handleProfilePage,
    handleAuthAccount,
  } = useContext(LoginContext);

  useEffect(() => {
    if (isAuthenticated) {
      handleAuthAccount();
    }
  }, [isAuthenticated]);

  return (
    <Navbar
      id='header-navbar'
      fixed='top'
      expand='lg'
    >
      <Navbar.Brand as={Link} to='/' id='brand-name'>
        <img id='brand-image' src='../../images/cookbot-logo.png' />
        <h2>CookBot AI</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto header-link-paths' variant='underline'>
          <Nav.Link as={NavLink} to='/'>
            Home
          </Nav.Link>{' '}
          {isDemoAccount || isAuthenticated ? (
            <Nav.Link as={NavLink} to='/my-recipes'>
              My Recipes
            </Nav.Link>
          ) : null}
        </Nav>
        <div className='header-links'>
          {!isDemoAccount && !isAuthenticated && (
            <Button id='create-button' onClick={toggleLoginModal}>
              Create a recipe
            </Button>
          )}
          {isAuthenticated && (
            <div id='logout-button'>
              <Link className='nav-link' to='/profile'>
                <Button id='profile-button'>
                  Welcome, {loggedUser ? loggedUser.nickname : null}
                </Button>
              </Link>
              <Logout />
            </div>
          )}
          {isDemoAccount && (
            <div id='logout-button'>
              <Link className='nav-link' to='/profile'>
                <Button id='profile-button' onClick={handleProfilePage}>
                  Welcome, {loggedUser.nickname}
                </Button>
              </Link>
              <Button id='logout-style-button' onClick={handleDemoLogout}>
                Logout
              </Button>
            </div>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
