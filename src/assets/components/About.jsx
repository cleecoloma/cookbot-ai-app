import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class About extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://avatars.githubusercontent.com/u/53655406?v=4"
          />
          <Card.Body>
            <Card.Title>Anthony Cunningham</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="dark" className="github-button">
              <a
                href="https://github.com/Spacecowboi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </Button>
            <Button variant="primary" className="linkedin-button">
              <a
                href="https://www.linkedin.com/in/anthonywcunningham/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://avatars.githubusercontent.com/u/104961833?v=4"
          />
          <Card.Body>
            <Card.Title>Chester Lee Coloma</Card.Title>
            <Card.Text>
              <ul>
                <li>Software Developer && Mechanical Engineer</li>
                <li>
                  Previous experience - planned and executed maintenance repairs
                  of US Navy nuclear submarines
                </li>
                <li>
                  Passion for front-end web development with a focus on
                  responsive design and user interface (UI) development
                </li>
              </ul>
            </Card.Text>
            <Button variant="dark" className="github-button">
              <a
                href="https://github.com/cleecoloma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </Button>
            <Button variant="primary" className="linkedin-button">
              <a
                href="https://www.linkedin.com/in/chesterleecoloma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://avatars.githubusercontent.com/u/134695595?v=4"
          />
          <Card.Body>
            <Card.Title>David Danilchik</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="dark" className="github-button">
              <a
                href="https://github.com/Arkuris"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </Button>
            <Button variant="primary" className="linkedin-button">
              <a
                href="https://www.linkedin.com/in/david-danilchik/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default About;
