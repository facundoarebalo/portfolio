import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiBootstrap, SiExpress, SiMongodb } from "react-icons/si";
import "./Skills.css";

const technologies = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: null, mark: "JS" },
  { name: "React", icon: FaReact },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
];

const Skills = () => (
  <ul className="technology-grid" aria-label="Tecnologías">
    {technologies.map(({ name, icon: Icon, mark }) => (
      <li className="technology-item" key={name}>
        <span className="technology-icon" aria-hidden="true">
          {Icon ? <Icon /> : <span className="technology-mark">{mark}</span>}
        </span>
        <span>{name}</span>
      </li>
    ))}
  </ul>
);

export default Skills;
