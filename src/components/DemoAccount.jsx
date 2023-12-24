import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Profile.css';

function DemoAccount() {
  const demoUser = {
    picture: 'https://place-hold.it/400x400&text=DEMO&bold&fontsize=20',
    nickname: 'Demo User',
    email: 'demo_user@email.com',
  };

  return (
    <div className='centered-container'>
      <h2>Profile</h2>
      <Card id='profile-card' style={{ width: '18rem' }}>
        <Card.Img variant='top' src={demoUser.picture} />
        <Card.Body>
          <Card.Title>{demoUser.nickname}</Card.Title>
          <Card.Text>{demoUser.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DemoAccount;
