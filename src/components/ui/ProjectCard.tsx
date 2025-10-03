import React from "react";
import { Card, Button } from "react-bootstrap";

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Ver mais</Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;