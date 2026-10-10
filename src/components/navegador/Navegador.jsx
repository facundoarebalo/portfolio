import { Navbar, Nav, Container } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navegador = () => (
  <Navbar className="site-navbar" expand="lg" sticky="top">
    <Container className="nav-container">
      <Navbar.Brand as={Link} to="home" smooth duration={500} className="brand-mark" aria-label="Facundo Arebalo, inicio">
        FA<span>.</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="portfolio-navigation" aria-label="Abrir navegación" />
      <Navbar.Collapse id="portfolio-navigation">
        <Nav className="main-nav ms-auto">
          <Nav.Link as={Link} to="about" smooth duration={500}>Perfil</Nav.Link>
          <Nav.Link as={Link} to="skills" smooth duration={500}>Tecnologías</Nav.Link>
          <Nav.Link as={Link} to="projects" smooth duration={500}>Proyectos</Nav.Link>
          <Nav.Link as={Link} to="contact" smooth duration={500}>Contacto</Nav.Link>
        </Nav>
        <div className="nav-socials">
          <a href="https://www.linkedin.com/in/facundo-arebalo" target="_blank" rel="noreferrer" aria-label="LinkedIn de Facundo">
            <FaLinkedin />
          </a>
          <a href="https://github.com/facundoarebalo" target="_blank" rel="noreferrer" aria-label="GitHub de Facundo">
            <FaGithub />
          </a>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navegador;
