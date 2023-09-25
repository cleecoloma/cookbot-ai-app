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
              <Card.Text>
                {' '}
                Full-stack software developer with a focus on responsive design
                and user interface (UI) development. Former mechanical engineer
                with an active secret clearance and 8+ years of professional
                working experience in team oriented roles to deliver technically
                sound solutions to maintain US Navy submarines while adhering to
                rigid documentation.
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
          <div id="team">
            <h4>Team Members</h4>
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
