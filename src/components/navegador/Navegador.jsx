import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-scroll'
import './Navbar.css';

const Navegador =() => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand >Mi Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="about" smooth={true} duration={500}>Sobre mí</Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={500}>Proyectos</Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contacto</Nav.Link>
            <Nav.Link as={Link} to="skills" smooth={true} duration={500}>Skills</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/facundo-arebalo" target="_blank">
              <FaLinkedin size={30} />
            </Nav.Link>
            <Nav.Link href="https://github.com/facundoarebalo" target="_blank">
              <FaGithub size={30} />
            </Nav.Link>
            <Nav.Link href="/path/to/your-cv.pdf" target="_blank" download>
              <Button variant="outline-light">
                <FaFileDownload size={20} /> Descargar CV
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;