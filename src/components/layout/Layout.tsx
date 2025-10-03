import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "react-bootstrap";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ marginLeft: "250px", width: "100%" }}>
        <Header />
        <Container fluid className="mt-4">{children}</Container>
      </div>
    </div>
  );
};

export default Layout;