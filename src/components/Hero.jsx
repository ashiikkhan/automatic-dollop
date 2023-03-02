import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <Container fluid className="p-5" style={{ backgroundColor: "#EDF2F7" }}>
      <Row
        className="d-flex flex-row sm:flex-column align-items-center justify-content-between g-4"
        style={{ height: "100%" }}
      >
        <Col xs={12} md={6}>
          <h4 className="fw-bold text-secondary">Geeks & Nerds who are</h4>
          <h1 className="fw-bolder text-secondary display-4">
            Powering Small Business Worldwide
          </h1>
          <Button variant="outline-secondary" className="m-1">
            Products
          </Button>
          <Button variant="light" className="m-1">
            Meet the team
          </Button>
        </Col>
        <Col xs={12} md={6}>
          <div className="embed-responsive embed-responsive-16by9 w-100">
            <iframe
              width="100%"
              height="320px"
              title="youtube-video"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/7Z3rmVtyTrI?feature=oembed"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
