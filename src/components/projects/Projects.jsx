import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1.',
      link: 'https://github.com/tu-usuario/proyecto1'
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2.',
      link: 'https://github.com/tu-usuario/proyecto2'
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3.',
      link: 'https://github.com/tu-usuario/proyecto3'
    }
  ];

  return (
    <Container className="projects">
      <h2>Mis Proyectos</h2>
      <Row>
        {projectData.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="custom" href={project.link} target="_blank">
                  Ver Proyecto
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;