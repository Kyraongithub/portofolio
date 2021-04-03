import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

export default function Mynav() {
  return (
    <div>
      <Navbar className="mynav" bg="dark" variant="dark" fixed="top">
        <div className="container">
          <Navbar.Brand href="#home">
            <Link
              className="navbrand"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-170}
              duration={500}
            >
              Rizky "Kyra" Ramadhan
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto nav-items">
            <Nav.Link>
              <Link
                className="navlink"
                to="home"
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="navlink"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="navlink"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="navlink"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}
