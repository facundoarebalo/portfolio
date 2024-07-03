import { useState } from 'react'
import './App.css'
import Skills from './components/skills/Skills'
import "bootstrap/dist/css/bootstrap.min.css"
import Navegador from './components/navegador/Navegador'
import Projects from './components/projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navegador/>
 <Skills/>
 <Projects/>
    </>
  )
}

export default App
