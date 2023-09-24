import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import '../styles/Contact.css';
import { Linkedin, Github } from 'react-bootstrap-icons';

class Contact extends React.Component {
  render() {
    return (
      <>
        <Container className="centered-container">
          <h2>Contact The Developer</h2>
          <Card id="contact-card">
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/104961833?v=4"
            />
            <Card.Body>
              <Card.Title id="contact-card-title">
                Chester Lee Coloma
              </Card.Title>
              <br />
              <Card.Text>• Software Developer && Mechanical Engineer</Card.Text>
              <br />
              <Card.Text>
                • Previous experience - planned and executed maintenance repairs
                of US Navy nuclear submarines
              </Card.Text>
              <br />
              <Card.Text>
                • Passion for front-end web development with a focus on
                responsive design and user interface (UI) development
              </Card.Text>
              <br />
              <div id="contact-buttons">
                <a
                  className="github-icon"
                  href="https://github.com/cleecoloma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={42} />
                </a>
                <a
                  className="linkedin-icon"
                  href="https://www.linkedin.com/in/chesterleecoloma/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={42} />
                </a>
              </div>
            </Card.Body>
          </Card>
          <div>
            <h4>Collaborators</h4>
            <ul>
              <li>Anthony Cunningham</li>
              <li>David Danilchik</li>
            </ul>
          </div>
        </Container>
      </>
    );
  }
}

export default Contact;
