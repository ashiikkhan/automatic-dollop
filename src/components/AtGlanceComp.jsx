import React from "react";
import { Card, Col } from "react-bootstrap";
import useGlanceData from "../hooks/useGlanceData";

const AtGlanceComp = () => {
  const array = [1, 2, 3, 4];
  const [glances, setGlances] = useGlanceData();
  return (
    <div className="text-center p-4" style={{ backgroundColor: "#EDF2F7" }}>
      <h1>authLab at a Glance</h1>
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
                  className="w-25 ms-auto me-auto"
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.des}</Card.Text>
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
