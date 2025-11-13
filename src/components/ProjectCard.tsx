import React from "react";
import { Card, Button } from "react-bootstrap";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button 
          variant="primary" 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto"
        >
          Ver Projeto
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;