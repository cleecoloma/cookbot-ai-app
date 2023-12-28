'use strict';

import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { LoginContext } from '../context/Login';
import '../styles/Profile.css';

function Profile() {
  const { loggedUser } = useContext(LoginContext);

  return (
    <div className='centered-container'>
      <h2>Profile</h2>
      <Card className='profile-card' style={{ width: '18rem' }}>
        <Card.Img variant='top' src={loggedUser.picture} />
        <Card.Body className='profile-body'>
          <Card.Title>{loggedUser.nickname}</Card.Title>
          <Card.Text>{loggedUser.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
