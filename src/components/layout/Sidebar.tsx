import React from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [show, setShow] = React.useState(false);

  // Tornar o link um container flex com gap entre ícone e texto
  const linkStyle = (path: string) =>
    `my-2 d-flex align-items-center gap-2 ${location.pathname === path ? "fw-bold text-primary" : "text-white"}`;

  return (
    <>
      <div
        className="d-none d-md-block bg-dark text-white p-3 vh-100 position-fixed"
        style={{ width: "250px" }}
      >
        <div className="text-center mb-4">
          <img
            src="/profile.png"
            alt="Tony Souza"
            className="rounded-circle"
            width={80}
            height={80}
          />
          <h5 className="mt-2">Tony Souza</h5>
        </div>

        <Nav className="flex-column mt-4">
          <Nav.Link as={Link} to="/" className={linkStyle("/")}>
            <img src="/icons/home.svg" alt="Dashboard" width={20} height={20} />
            Dashboard
          </Nav.Link>

          <Nav.Link as={Link} to="/projects" className={linkStyle("/projects")}>
            <img src="/icons/projects.svg" alt="Projects" width={20} height={20} />
            Projects
          </Nav.Link>

          <Nav.Link as={Link} to="/about" className={linkStyle("/about")}>
            <img src="/icons/about.svg" alt="About" width={20} height={20} />
            About
          </Nav.Link>

          <Nav.Link as={Link} to="/contact" className={linkStyle("/contact")}>
            <img src="/icons/contact.svg" alt="Contact" width={20} height={20} />
            Contact
          </Nav.Link>
        </Nav>
      </div>

      <button
        className="btn btn-dark d-md-none position-fixed m-2"
        onClick={() => setShow(true)}
        style={{ zIndex: 1050 }}
      >
        ☰
      </button>

      <Offcanvas show={show} onHide={() => setShow(false)} className="bg-dark text-white">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Tony Souza</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="text-center mb-4">
            <img
              src="/profile.png"
              alt="Tony Souza"
              className="rounded-circle"
              width={80}
              height={80}
            />
            <h5 className="mt-2">Tony Souza</h5>
          </div>

          <Nav className="flex-column mt-4 text-white">
            <Nav.Link as={Link} to="/" className={linkStyle("/")} onClick={() => setShow(false)}>
              <img src="/icons/home.svg" alt="Dashboard" width={20} height={20} />
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className={linkStyle("/projects")} onClick={() => setShow(false)}>
              <img src="/icons/projects.svg" alt="Projects" width={20} height={20} />
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={linkStyle("/about")} onClick={() => setShow(false)}>
              <img src="/icons/about.svg" alt="About" width={20} height={20} />
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={linkStyle("/contact")} onClick={() => setShow(false)}>
              <img src="/icons/contact.svg" alt="Contact" width={20} height={20} />
              Contact
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;