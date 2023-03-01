import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./style.css";
const ProductCard = (props) => {
  const { img, name, des } = props.product;
  return (
    <Col md={12} lg={6} className="pb-4">
      <Card
        style={{ width: "100%", borderRadius: 0 }}
        className="p-4"
        id="card"
      >
        <Card.Img variant="top" src={img} className="w-25 ms-auto me-auto" />
        <Card.Body>
          <Card.Title className="fs-3 fw-bold">{name}</Card.Title>
          <Card.Text>{des}</Card.Text>
          <Button variant="secondary">Learn More</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
