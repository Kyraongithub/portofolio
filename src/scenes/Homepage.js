import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";

import Navbar from "elements/Mynav";
import Home from "parts/Home";
import Projects from "parts/Projects";
import Skills from "parts/Skills";
import Footer from "parts/Footer";

import html from "assets/images/tools/html.png";
import css from "assets/images/tools/css.png";
import javascript from "assets/images/tools/javascript.png";
import bootstrap from "assets/images/tools/bootstrap.png";
import react from "assets/images/tools/react.png";
import php from "assets/images/tools/php.png";
import mysql from "assets/images/tools/mysql.png";
import firebase from "assets/images/tools/firebase.png";
import vscode from "assets/images/tools/vscode.png";
import figma from "assets/images/tools/figma.png";

export default function Homepage() {
  const skills = [
    {
      imgSrc: html,
      imgAlt: "Tools 01",
    },
    {
      imgSrc: css,
      imgAlt: "Tools 02",
    },
    {
      imgSrc: javascript,
      imgAlt: "Tools 03",
    },
    {
      imgSrc: bootstrap,
      imgAlt: "Tools 04",
    },
    {
      imgSrc: react,
      imgAlt: "Tools 05",
    },
    {
      imgSrc: php,
      imgAlt: "Tools 06",
    },
    {
      imgSrc: mysql,
      imgAlt: "Tools 07",
    },
    {
      imgSrc: firebase,
      imgAlt: "Tools 08",
    },
    {
      imgSrc: vscode,
      imgAlt: "Tools 09",
    },
    {
      imgSrc: figma,
      imgAlt: "Tools 10",
    },
  ];
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <div className="container">
          <Home></Home>
          <Projects></Projects>
          <div className="skills">
            <div className="container">
              <Row className="">
                <Col></Col>
                <Col>
                  <Fade bottom delay={200}>
                    <h1 className="projects-title">Tools & Skills</h1>
                  </Fade>
                </Col>
                <Col></Col>
              </Row>
              <div className="features-tiles-inner section-inner">
                <div className="tiles-wrap center-content">
                  {skills.map((skills, index) => (
                    <Skills
                      key={index}
                      delayInMS={index * 200}
                      data={skills}
                    ></Skills>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
