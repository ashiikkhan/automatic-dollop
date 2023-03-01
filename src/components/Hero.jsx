import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <Container fluid className="p-5" style={{ backgroundColor: "#EDF2F7" }}>
      <Row
        className="d-flex flex-row sm:flex-column align-items-center justify-content-between"
        style={{ height: "400px" }}
      >
        <Col xs={12} md={6}>
          <h3>Geeks & Nerds who are</h3>
          <h2>Powering Small Business Worldwide</h2>
          <Button variant="outline-secondary">Products</Button>
          <Button variant="light">Meet the team</Button>
        </Col>
        <Col xs={12} md={6}>
          <div className="embed-responsive embed-responsive-16by9 w-100">
            <iframe
              width="100%"
              height="320px"
              title="youtube-video"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/7Z3rmVtyTrI?feature=oembed"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
