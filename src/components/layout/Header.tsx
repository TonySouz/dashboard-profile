import React from "react";
import { Navbar } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm px-4">
      <Navbar.Brand href="/">Dashboard</Navbar.Brand>
    </Navbar>
  );
};

export default Header;