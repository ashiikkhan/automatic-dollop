import React from "react";
import { Card, Col } from "react-bootstrap";
import useGlanceData from "../hooks/useGlanceData";

const AtGlanceComp = () => {
  const array = [1, 2, 3, 4];
  const [glances, setGlances] = useGlanceData();
  return (
    <div className="text-center p-4" style={{ backgroundColor: "#EDF2F7" }}>
      <h2 className="pb-4">authLab at a Glance</h2>
      <div className="container">
        <div className="row">
          {glances.map((item) => (
            <Col md={3} sm={12} className="pb-4">
              <Card
                style={{ width: "100%", borderRadius: 0 }}
                className="p-4"
                id="glance_card"
              >
                <Card.Img
                  variant="top"
                  src={item.img}
                  className="w-50 w-sm-25 ms-auto me-auto"
                />
                <Card.Body>
                  <Card.Title className="fs-2 fw-bold">{item.title}</Card.Title>
                  <Card.Text className="fs-6">{item.des}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AtGlanceComp;
