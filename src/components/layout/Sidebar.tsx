import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div
      className="bg-dark text-white p-3 vh-100 position-fixed"
      style={{ width: "250px" }}
    >
      <h3 className="text-center">Meu Portfólio</h3>
      <Nav className="flex-column mt-4">
        <Nav.Link as={Link} to="/" className="text-white">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/projects" className="text-white">Projetos</Nav.Link>
        <Nav.Link as={Link} to="/about" className="text-white">Sobre Mim</Nav.Link>
        <Nav.Link as={Link} to="/contact" className="text-white">Contato</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;