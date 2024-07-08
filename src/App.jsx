import './App.css'
import Skills from './components/skills/Skills'
import "bootstrap/dist/css/bootstrap.min.css"
import Navegador from './components/navegador/Navegador'
import Projects from './components/projects/Projects'
import { Element } from 'react-scroll';
import foto from './assets/img/foto1.png'
import Footer from './components/footer/Footer'
import Contacto from './components/contacto/Contacto'
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

function App() {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAbout(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
    <Element name="home">
      <Navegador />
      <Element name="about">
        <section className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 text-center">
              <figure className='custom-fig'>
                <img src={foto} alt="Foto de perfil" className="img-fluid rounded-circle custom-img floating" />
                <h3 className='mt-2'>Hola, soy Facundo Arebalo 👋</h3>
              </figure>
            </div>
            <div className="col-md-8">
              <CSSTransition
                in={showAbout}
                timeout={300}
                classNames="about"
                unmountOnExit
              >
                <div>
                  <h2>Sobre mí</h2>
                  <p>Soy <strong>Desarrollador Full Stack</strong> con experiencia sólida en el stack MERN, me esfuerzo por ofrecer resultados excepcionales mientras me mantengo al día con las últimas tendencias tecnológicas. 🚀 <br />
                  Lo que distingue mi enfoque es mi firme compromiso con el aprendizaje continuo. <br /> Creo firmemente en la importancia de mantenerme actualizado con las últimas tecnologías y metodologías de desarrollo. Ya sea explorando nuevas bibliotecas de JavaScript o dominando conceptos avanzados de bases de datos NoSQL, siempre estoy buscando expandir mis habilidades y conocimientos. 🚀</p>
                </div>
              </CSSTransition>
            </div>
          </div>
        </section>
      </Element>
      <Element name="skills">
          <h2 className='text-center'>Mis Habilidades</h2>
        <section className="skills">
          <Skills />
        </section>
      </Element>
      <Element name="projects">
        <h2 className='text-center'>Mis Proyectos</h2>
        <section className="projects">
          <Projects />
        </section>
      </Element>
      <Element name="contact">
        <section className="contact">
          <h2 className='text-center'>Contactate conmigo</h2>
          <Contacto />
        </section>
      </Element>
      <Footer />
    </Element>
    </>
  )
}

export default App