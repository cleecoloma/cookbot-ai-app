import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

// Define handleLogout outside the LogoutButton component
export function handleLogout(logout) {
  logout({ returnTo: window.location.origin });
}

function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <Button
        variant='secondary'
        id='logout-style-button'
        onClick={() => handleLogout(logout)} // Pass the logout function to handleLogout
      >
        Log out
      </Button>
    )
  );
}

export default LogoutButton;
