import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => (
  <footer className="site-footer">
    <Container className="footer-inner">
      <p>© {new Date().getFullYear()} Facundo Arebalo</p>
      <p className="footer-note">Hecho con dedicación en Argentina.</p>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/facundo-arebalo" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/facundoarebalo" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
