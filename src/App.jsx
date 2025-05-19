// src/App.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,
  Nav,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Anusha A</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="my-5">
        <section id="about">
          <h2>About Me</h2>
          <p>
            I am a MERN Stack Developer with 3+ years of experience building
            scalable web applications using React, Node.js, and Spring Boot.
          </p>
        </section>

        <section id="projects" className="mt-5">
          <h2>Projects</h2>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Book Management System</Card.Title>
                  <Card.Text>
                    MERN stack app to manage a digital library with CRUD
                    features and user authentication.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Ticket Booking System</Card.Title>
                  <Card.Text>
                    Full-featured MERN app for booking event/movie tickets with
                    real-time updates.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>E-Commerce Platform</Card.Title>
                  <Card.Text>
                    React + Spring Boot project with REST APIs, cart
                    functionality, and user management.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section id="contact" className="mt-5">
          <h2>Contact</h2>
          <p>Email: anusha96866@gmail.com</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/anusha-a-302b581b6"
              target="_blank"
              rel="noreferrer"
            >
              anusha-a-302b581b6
            </a>
          </p>
        </section>
      </Container>
    </div>
  );
}

export default App;
