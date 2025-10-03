import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ui/ProjectCard";

const Projects: React.FC = () => {
  const projetos = [
    { title: "Portfolio Website", description: "Meu site pessoal com React + Vite." },
    { title: "API Node.js", description: "API RESTful com autenticação JWT." },
    { title: "Dashboard Analytics", description: "Dashboard interativo com gráficos." },
  ];

  return (
    <div>
      <h2 className="mb-4">Projetos</h2>
      <Row>
        {projetos.map((proj, index) => (
          <Col md={4} key={index}>
            <ProjectCard title={proj.title} description={proj.description} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;