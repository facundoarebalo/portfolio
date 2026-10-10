import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Element } from "react-scroll";
import foto from "./assets/img/foto1.png";
import cv from "./CV-FacundoArebalo.pdf";
import Navegador from "./components/navegador/Navegador";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contacto from "./components/contacto/Contacto";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navegador />
      <main>
        <Element name="home">
          <section className="hero-section" aria-labelledby="hero-title">
            <div className="page-container hero-grid">
              <div className="hero-copy">
                <p className="eyebrow"><span className="status-dot" /> Desarrollo web · MERN</p>
                <h1 id="hero-title">Hola, soy <span>Facundo.</span></h1>
                <p className="hero-lead">
                  Desarrollo experiencias web claras y funcionales. Busco oportunidades trainee o junior y también creo landing pages para negocios y profesionales.
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#projects" onClick={(event) => { event.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                    Ver HTMLift Gym
                  </a>
                  <a className="button button-secondary" href="#contact" onClick={(event) => { event.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                    Hablemos de tu landing
                  </a>
                </div>
                <a className="cv-link" href={cv} target="_blank" rel="noreferrer">
                  Descargar CV <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="hero-visual">
                <div className="portrait-frame">
                  <img src={foto} alt="Retrato de Facundo Arebalo" className="portrait" />
                </div>
                <div className="portrait-caption"><span>01</span> Desarrollo con intención</div>
              </div>
            </div>
          </section>
        </Element>

        <Element name="about">
          <section className="intro-section page-container" aria-labelledby="intro-title">
            <div className="section-kicker">Perfil</div>
            <div className="intro-content">
              <h2 id="intro-title">Código claro, diseño útil y ganas de seguir creciendo.</h2>
              <p>
                Trabajo con React y el stack MERN para crear aplicaciones y sitios web responsivos. Me interesa resolver necesidades reales, cuidar los detalles y aprender en cada proyecto.
              </p>
            </div>
          </section>
        </Element>

        <Element name="skills">
          <section className="content-section skills-section" aria-labelledby="skills-title">
            <div className="page-container">
              <div className="section-heading">
                <div>
                  <div className="section-kicker">Herramientas</div>
                  <h2 id="skills-title">Tecnologías</h2>
                </div>
                <p>Las herramientas que uso para diseñar, construir y conectar experiencias web.</p>
              </div>
              <Skills />
            </div>
          </section>
        </Element>

        <Element name="projects">
          <section className="content-section projects-section" id="projects" aria-labelledby="projects-title">
            <div className="page-container">
              <div className="section-heading">
                <div>
                  <div className="section-kicker">Trabajo seleccionado</div>
                  <h2 id="projects-title">Proyectos</h2>
                </div>
                <p>Proyectos personales y colaborativos donde pongo en práctica lo que aprendo.</p>
              </div>
              <Projects />
            </div>
          </section>
        </Element>

        <Element name="contact">
          <section className="contact-section" id="contact" aria-labelledby="contact-title">
            <div className="page-container contact-layout">
              <div className="contact-copy">
                <div className="section-kicker">Contacto</div>
                <h2 id="contact-title">¿Tenés un proyecto en mente?</h2>
                <p>Si buscás sumar a alguien a tu equipo o necesitás una landing page para tu negocio, escribime.</p>
                <p className="contact-email">Usá el formulario para contarme qué necesitás.</p>
              </div>
              <Contacto />
            </div>
          </section>
        </Element>
      </main>
      <Footer />
    </>
  );
}

export default App;

