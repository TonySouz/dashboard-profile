import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ui/ProjectCard";

const Dashboard: React.FC = () => {
  return (
    <Row>
      <Col md={4}>
        <ProjectCard title="Projeto 1" description="Descrição curta do projeto." />
      </Col>
      <Col md={4}>
        <ProjectCard title="Projeto 2" description="Outro projeto legal." />
      </Col>
      <Col md={4}>
        <ProjectCard title="Projeto 3" description="Mais um destaque." />
      </Col>
    </Row>
  );
};

export default Dashboard;