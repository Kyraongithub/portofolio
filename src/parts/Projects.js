import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";

import projects1 from "assets/images/projects/projects1.png";
import projects2 from "assets/images/projects/projects2.png";
import projects3 from "assets/images/projects/projects3.png";
import projects4 from "assets/images/projects/projects4.png";

export default function Projects() {
  return (
    <Container className="projects">
      <div className="projects-header">
        <Row>
          <Col></Col>
          <Col>
            <Fade bottom delay={200}>
              <h1 className="projects-title">Projects</h1>
            </Fade>
          </Col>
          <Col></Col>
        </Row>
      </div>
      <div className="projects-content">
        <Fade bottom delay={500}>
          <Row>
            <Col>
              <h3 className="project-text">Web development</h3>
            </Col>
            <Col>
              <img src={projects1} alt="Project1" width="700" height="700" />
            </Col>
          </Row>
        </Fade>
        <Fade bottom delay={500}>
          <Row>
            <Col>
              <img src={projects2} alt="Project2" width="700" height="700" />
            </Col>
            <Col>
              <h3 className="project-text">UI/UX Design</h3>
            </Col>
          </Row>
        </Fade>
        <Fade bottom delay={500}>
          <Row>
            <Col>
              <h3 className="project-text">UI/UX Design</h3>
            </Col>
            <Col>
              <img src={projects3} alt="Project3" width="700" height="700" />
            </Col>
          </Row>
        </Fade>
        <Fade bottom delay={500}>
          <Row>
            <Col>
              <img src={projects4} alt="Project4" width="700" height="700" />
            </Col>
            <Col>
              <h3 className="project-text">UI/UX Design</h3>
            </Col>
          </Row>
        </Fade>
      </div>
    </Container>
  );
}
