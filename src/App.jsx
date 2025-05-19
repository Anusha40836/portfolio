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
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <section className="bg-dark text-white text-center py-5">
        <Container>
          <h1 className="display-4">Hi, I'm Anusha 👋</h1>
          <p className="lead">MERN Stack Developer | React | Node | Express</p>
        </Container>
      </section>

      <Container className="my-5">
        <section id="about" className="my-5">
          <h2 className="mb-3">About Me</h2>
          <p className="text-muted">
            I am a passionate MERN Stack Developer with over 3 years of
            experience building full-stack web applications. I specialize in
            React.js for dynamic frontends, Node.js/Express for scalable backend
            services, and MongoDB/MySQL for robust data management. I thrive in
            Agile environments, value clean code, and enjoy solving real-world
            problems through efficient and user-friendly web solutions.
          </p>
          <a
            href="/ANUSHA_A_RESUME.pdf"
            download
            className="btn btn-outline-primary mt-3"
          >
            📄 Download Resume
          </a>
        </section>

        <section id="skills" className="mt-5">
          <h2 className="mb-3">Skills</h2>
          <Row>
            <Col md={4}>
              <p>🌐 React.js, Redux</p>
            </Col>
            <Col md={4}>
              <p>⚙️ Node.js, Express.js</p>
            </Col>
            <Col md={4}>
              <p>🛠️ Spring Boot, REST APIs</p>
            </Col>
            <Col md={4}>
              <p>💾 MongoDB, MySQL</p>
            </Col>
            <Col md={4}>
              <p>🧪 Unit Testing, Postman</p>
            </Col>
            <Col md={4}>
              <p>☁️ Git, AWS Basics</p>
            </Col>
          </Row>
        </section>

        <section id="projects" className="mt-5">
          <h2 className="mb-4">Projects</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="mb-4 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold">
                    Book Management System
                  </Card.Title>
                  <Card.Text>
                    A full-stack MERN application for managing a digital library
                    with features like book listing, searching, and user
                    authentication.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://github.com/anusha96866/book-management-system"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="mb-4 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold">
                    Ticket Booking System
                  </Card.Title>
                  <Card.Text>
                    A responsive MERN stack app for booking movie or event
                    tickets with seat selection, booking history, and secure
                    login.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://github.com/anusha96866/ticket-booking-system"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="mb-4 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold">
                    E-Commerce Platform
                  </Card.Title>
                  <Card.Text>
                    An online shopping platform using React and Spring Boot with
                    cart functionality, product management, and RESTful APIs.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://github.com/anusha96866/ecommerce-platform"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="mb-4 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold">Portfolio Website</Card.Title>
                  <Card.Text>
                    A personal portfolio site built using React and Bootstrap to
                    highlight my work, skills, and professional background.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://github.com/Anusha40836/portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </Button>{" "}
                  <Button
                    variant="outline-success"
                    href="https://your-live-url.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section id="contact" className="mt-5">
          <h2 className="mb-3">Contact</h2>
          <p>
            <strong>Phone:</strong> 9036088667
          </p>
          <p>
            <strong>Email:</strong> anusha96866@gmail.com
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
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
