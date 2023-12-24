import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Profile.css';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className='centered-container'>
        <h2>Profile</h2>
        <Card id='profile-card' style={{ width: '18rem' }}>
          <Card.Img variant='top' src={user.picture} />
          <Card.Body>
            <Card.Title>{user.nickname}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  );
}

export default Profile;
