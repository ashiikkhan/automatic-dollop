import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./style.css";
const ProductCard = (props) => {
  const { img } = props.product;
  return (
    <Col md={12} lg={6} className="pb-4">
      <Card
        style={{ width: "100%", borderRadius: 0 }}
        className="p-4"
        id="card"
      >
        <Card.Img variant="top" src={img} className="w-25 ms-auto me-auto" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="secondary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
