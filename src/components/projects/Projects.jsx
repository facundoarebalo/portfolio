import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1.',
      repoLink: 'https://github.com/tu-usuario/proyecto1',
      siteLink: 'https://tu-sitio.com/proyecto1',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2.',
      repoLink: 'https://github.com/tu-usuario/proyecto2',
      siteLink: 'https://tu-sitio.com/proyecto2',
      image: 'https://via.placeholder.com/150'
    },

  ];

  return (
    <>
       <Container className="projects">
      <Row className="justify-content-center">
      <h2>Mis Proyectos</h2>
        {projectData.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4 col">
            <Card>
              <Card.Body>
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="custom" href={project.repoLink} target="_blank" className="mr-2 btn-sm">
                  <FaGithub /> Ver repositorio
                </Button>
                <Button variant="custom" href={project.siteLink} target="_blank" className="btn-sm mt-2">
                  <FaExternalLinkAlt /> Ver sitio
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
        </>
  );
}

export default Projects;