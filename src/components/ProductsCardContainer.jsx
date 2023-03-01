import React from "react";
import { Container, Row } from "react-bootstrap";
import useProductsData from "../hooks/useProductsData";
import ProductCard from "./ProductCard";
const ProductsCardContainer = () => {
  const [products, setProducts] = useProductsData();

  return (
    <div className="w-100 overflow-hidden text-center ">
      <h2>Products card container</h2>
      <Container fluid className="d-flex flex-wrap p-5">
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
