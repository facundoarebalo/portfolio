import './App.css'
import Skills from './components/skills/Skills'
import "bootstrap/dist/css/bootstrap.min.css"
import Navegador from './components/navegador/Navegador'
import Projects from './components/projects/Projects'
import { Element } from 'react-scroll';

function App() {
  

  return (
    <>
  <Navegador />
      <Element name="about">
        <section>
          <h2>Sobre mí</h2>
          <p>Contenido sobre mí...</p>
        </section>
      </Element>
      <Element name="skills">
        <Skills /> 
      </Element>
      <Element name="projects">
        <Projects /> 
      </Element>
      <Element name="contact">
        <section>
          <h2>Contacto</h2>
          <p>Contenido de contacto...</p>
        </section>
      </Element>
    </>
  )
}

export default App
