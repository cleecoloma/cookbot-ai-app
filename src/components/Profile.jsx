import React, { useContext} from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Profile.css';
import { LoginContext } from '../context/Login';

function Profile() {
  const { loggedUser } = useContext(LoginContext);

  return (
    <div className='centered-container'>
      <h2>Profile</h2>
      <Card id='profile-card' style={{ width: '18rem' }}>
        <Card.Img variant='top' src={loggedUser.picture} />
        <Card.Body>
          <Card.Title>{loggedUser.nickname}</Card.Title>
          <Card.Text>{loggedUser.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
