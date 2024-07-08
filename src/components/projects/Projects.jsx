import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiBootstrap, SiMongodb, SiExpress } from 'react-icons/si';
import './Projects.css';
import image1 from '../../assets/img/htmlift.png';
import image2 from '../../assets/img/billstv.png';

const Projects = () => {
  const iconMap = {
    'React': <FaReact />,
    'Bootstrap': <SiBootstrap />,
    'Node': <FaNodeJs />,
    'Express': <SiExpress />,
    'MongoDB': <SiMongodb />
  };

  const projectData = [
    {
      title: 'Bills TV',
      description: 'Aplicación web para la compra de productos de televisión, la cual cuenta con un diseño moderno y un diseño moderno para el cliente, este proyecto solo cuenta con parte del front ya que es uno de los primeros que hice.',
      repoLink: 'https://github.com/facundoarebalo/billsTV-front',
      siteLink: 'https://bills-tv.vercel.app/',
      image: image2,
      tecnologies: ['React', 'Bootstrap']
    },
    {
      title: 'HTMlift GYM',
      description: 'Es una aplicación web diseñada específicamente para gimnasios, con el objetivo de proporcionar una experiencia de usuario excepcional tanto para los administradores del gimnasio como para sus miembros.',
      repoLink: 'https://github.com/santiag004/proyectofinal-78i',
      siteLink: 'https://htmlift.netlify.app/',
      image: image1,
      tecnologies: ['React', 'Bootstrap', 'Node', 'Express', 'MongoDB']
    },
  ];

  return (
    <Container className="projects">
      <Row className="justify-content-center">
        {projectData.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4 col">
            <Card>
              <Card.Body>
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Title>{project.title}</Card.Title>
                <ProjectDescription description={project.description} />
                <Button variant="custom" href={project.repoLink} target="_blank" className="mr-2 btn-sm">
                  <FaGithub /> Ver repositorio
                </Button>
                <Button variant="custom" href={project.siteLink} target="_blank" className="btn-sm mt-2">
                  <FaExternalLinkAlt /> Ver sitio
                </Button>
                <Card.Text>
                  {project.tecnologies.map((tech, i) => (
                    <span key={i} className="tech-icon">
                      {iconMap[tech]}
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const ProjectDescription = ({ description }) => {
  const [showFull, setShowFull] = useState(false);

  const toggleShowFull = () => {
    setShowFull(!showFull);
  };

  return (
    <div>
      <Card.Text className={`project-description ${showFull ? 'show-full' : ''}`}>
        {description}
      </Card.Text>
      <Button variant="link" onClick={toggleShowFull} className="p-0">
        {showFull ? 'Ver menos' : 'Ver más'}
      </Button>
    </div>
  );
};

export default Projects;