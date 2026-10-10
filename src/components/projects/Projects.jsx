import { FaExternalLinkAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiBootstrap, SiExpress, SiMongodb } from "react-icons/si";
import imageHtmlift from "../../assets/img/htmlift.png";
import imageBills from "../../assets/img/billstv.png";
import "./Projects.css";

const iconMap = {
  React: FaReact,
  Bootstrap: SiBootstrap,
  "Node.js": FaNodeJs,
  Express: SiExpress,
  MongoDB: SiMongodb,
};

const projects = [
  {
    title: "HTMLift Gym",
    label: "Proyecto colaborativo · MERN",
    description: "Aplicación web para la gestión de gimnasios. Centraliza la administración de miembros y clases para facilitar el seguimiento y la organización diaria.",
    features: [
      "Gestión de perfiles de miembros, con seguimiento de progreso y asistencia.",
      "Administración de horarios, disponibilidad y reservas de clases.",
    ],
    technologies: ["React", "Bootstrap", "Node.js", "Express", "MongoDB"],
    repository: "https://github.com/santiag004/proyectofinal-78i",
    site: "https://htmlift.netlify.app/",
    image: imageHtmlift,
    featured: true,
  },
  {
    title: "Bills TV",
    label: "Frontend · React",
    description: "Interfaz web para una plataforma de streaming, construida con React y Bootstrap.",
    technologies: ["React", "Bootstrap"],
    repository: "https://github.com/facundoarebalo/billsTV-front",
    site: "https://bills-tv.vercel.app/",
    image: imageBills,
  },
];

const Projects = () => (
  <div className="project-list">
    {projects.map((project) => (
      <article className={"project-card" + (project.featured ? " project-card-featured" : "")} key={project.title}>
        <div className="project-image-wrap">
          <img className="project-image" src={project.image} alt={"Vista previa de " + project.title} />
        </div>
        <div className="project-content">
          <p className="project-label">{project.label}</p>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.description}</p>
          {project.features && (
            <ul className="project-features">
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          )}
          <ul className="project-technologies" aria-label={"Tecnologías utilizadas en " + project.title}>
            {project.technologies.map((technology) => {
              const Icon = iconMap[technology];
              return (
                <li key={technology}>
                  {Icon && <Icon aria-hidden="true" />}
                  <span>{technology}</span>
                </li>
              );
            })}
          </ul>
          <div className="project-links">
            <a className="project-link project-link-primary" href={project.site} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt aria-hidden="true" /> Ver demo
            </a>
            <a className="project-link project-link-secondary" href={project.repository} target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" /> Repositorio
            </a>
          </div>
        </div>
      </article>
    ))}
  </div>
);

export default Projects;
