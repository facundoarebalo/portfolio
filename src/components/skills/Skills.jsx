import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript } from 'react-icons/si';
import Carousel from 'react-bootstrap/Carousel';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills">
      <h2>Mis Habilidades</h2>
      <Carousel interval={2000} controls={false} indicators={false} pause={false}>
        <Carousel.Item>
          <div className="skill">
            <FaHtml5 size={50} /> <span>HTML5</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="skill">
            <FaCss3Alt size={50} /> <span>CSS3</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="skill">
            <FaBootstrap size={50} /> <span>Bootstrap</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="skill">
            <FaReact size={50} /> <span>React</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="skill">
            <SiMongodb size={50} /> <span>MongoDB</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="skill">
            <SiExpress size={50} /> <span>Express</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="skill">
            <FaNodeJs size={50} /> <span>Node.js</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="skill">
            <SiJavascript size={50} /> <span>JavaScript</span>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Skills;