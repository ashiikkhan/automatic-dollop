import React from "react";
import { Container, Row } from "react-bootstrap";
import useProductsData from "../hooks/useProductsData";
import ProductCard from "./ProductCard";
const ProductsCardContainer = () => {
  const [products, setProducts] = useProductsData();

  return (
    <div className="w-100 overflow-hidden text-center">
      <div className="container p-5 pb-3">
        <h2 className="text-dark fw-bold fs-2">
          Powering Thousands of Businesses
        </h2>
        <p className="fs-5">
          <span className="text-dark fw-bold">Over 500,000+ businesses</span>{" "}
          use our software to increase their conversion rate and grow their
          business.
        </p>
      </div>
      <Container fluid className="d-flex flex-wrap p-3">
        <Row className="w-100 text-center">
          {products.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductsCardContainer;
