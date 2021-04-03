import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import HomeImg from "assets/images/my/hero.png";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

export default function Home() {
  return (
    <Container>
      <Row className="">
        <Col>
          <div className="home center-content">
            <Fade bottom delay={500}>
              <h1>Hey there, I'm Rizky Ramadhan!</h1>
            </Fade>
            <Fade bottom delay={1000}>
              <h5>Front-end Developer | UI/UX Designer</h5>
            </Fade>
            <Fade bottom delay={1500}>
              <img src={HomeImg} />
            </Fade>
            <Flip bottom delay={2000}>
              <div className="center">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
              </div>
            </Flip>
            <div className="round"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
