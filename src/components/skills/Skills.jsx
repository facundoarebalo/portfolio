import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript } from 'react-icons/si';
import './Skills.css';

function Skills() {
  return (
    <div className="skills">
      <h2>Mis Habilidades</h2>
      <div className="skills-icons">
        <div className="skill">
          <FaHtml5 /> <span>HTML5</span>
        </div>
        <div className="skill">
          <FaCss3Alt /> <span>CSS3</span>
        </div>
        <div className="skill">
          <FaBootstrap /> <span>Bootstrap</span>
        </div>
        <div className="skill">
          <FaReact /> <span>React</span>
        </div>
        <div className="skill">
          <SiMongodb /> <span>MongoDB</span>
        </div>
        <div className="skill">
          <SiExpress /> <span>Express</span>
        </div>
        <div className="skill">
          <FaNodeJs /> <span>Node.js</span>
        </div>
        <div className="skill">
          <SiJavascript /> <span>JavaScript</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;