import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import './Navbar.css';

const Navegador =() => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Mi Portafolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#about">Sobre mí</Nav.Link>
          <Nav.Link href="#projects">Proyectos</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://www.linkedin.com/in/tu-perfil" target="_blank">
            <FaLinkedin size={30} />
          </Nav.Link>
          <Nav.Link href="https://github.com/tu-usuario" target="_blank">
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