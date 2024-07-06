import './App.css'
import Skills from './components/skills/Skills'
import "bootstrap/dist/css/bootstrap.min.css"
import Navegador from './components/navegador/Navegador'
import Projects from './components/projects/Projects'
import { Element } from 'react-scroll';
import foto from './assets/img/foto1.png'
import Footer from './components/footer/Footer'
import Contacto from './components/contacto/Contacto'

function App() {
  return (
    <>
      <Navegador />
      <Element name="about">
        <section className="container">
          <div className="row align-items-center">
            <div className="col-md-4 order-md-2 order-1">
              <figure className='custom-fig'>
                <img src={foto} alt="Foto de perfil" className="img-fluid rounded-circle custom-img floating" />
              </figure>
            </div>
            <div className="col-md-8 order-md-1 order-2">
              <h2>Sobre mí</h2>
              <p>Hola! Mi nombre es Facundo y soy <strong>Desarrollador Full Stack</strong> con experiencia sólida en el stack MERN, me esfuerzo por ofrecer resultados excepcionales mientras me mantengo al día con las últimas tendencias tecnológicas. 🚀 <br />
              Lo que distingue mi enfoque es mi firme compromiso con el aprendizaje continuo. <br /> Creo firmemente en la importancia de mantenerme actualizado con las últimas tecnologías y metodologías de desarrollo. Ya sea explorando nuevas bibliotecas de JavaScript o dominando conceptos avanzados de bases de datos NoSQL, siempre estoy buscando expandir mis habilidades y conocimientos. 🚀</p>
            </div>
          </div>
        </section>
      </Element>
      <Element name="skills">
        <section className="skills">
          <Skills />
        </section>
      </Element>
      <Element name="projects">
        <section className="projects">
          <Projects />
        </section>
      </Element>
      <Element name="contact">
        <section className="contact">
          <h2>Contactate conmigo</h2>
          <Contacto />
        </section>
      </Element>
      <Footer />
    </>
  )
}

export default App