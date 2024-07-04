import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left">
            <p>&copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <a href="https://www.linkedin.com/in/facundo-arebalo" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/facundoarebalo" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <FaGithub size={30} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;