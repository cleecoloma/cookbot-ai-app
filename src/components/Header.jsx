'use strict';

import React, { useState, useEffect, useContext } from 'react';
import '../styles/Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import HamburgerMenu from '../components/HamburgerMenu';
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

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const showMenuQuery = window.matchMedia('(max-width: 1220px)').matches;
      setShowMenu(showMenuQuery);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <Navbar id='header-navbar' fixed='top' expand='xl'>
      <Navbar.Brand as={Link} to='/' id='brand-name'>
        <img id='brand-image' src='../../images/cookbot-logo.png' />
        <h2>CookBot AI</h2>
      </Navbar.Brand>
      {showMenu ? (
        <HamburgerMenu />
      ) : (
        <>
          <Nav className='header-link-paths me-auto' variant='underline'>
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
              <div id='action-button'>
                <Link className='nav-link' to='/profile'>
                  <Button id='profile-button'>
                    Welcome, {loggedUser ? loggedUser.nickname : null}
                  </Button>
                </Link>
                <Logout />
              </div>
            )}
            {isDemoAccount && (
              <div id='action-button'>
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
        </>
      )}
    </Navbar>
  );
}

export default Header;
