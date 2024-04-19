import {Container, Row } from "react-bootstrap";
import CardProduct from "./cardProduct";

import "./listProduct.css"

const listProduct = () => {
    return (
      <Container className="d-flex">
        <Row xs={2} md={3} lg={5}>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
        </Row>

      </Container>
    );
};

export default listProduct;