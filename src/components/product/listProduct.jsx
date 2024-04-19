import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "./cardProduct";
import AboutProduct from "./about-product/aboutProduct";
import "./listProduct.css"

const listProduct = () => {
    return (
      <Container className="d-flex">
        <Col>
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
        </Col>
        <Col>
        <AboutProduct></AboutProduct>
        </Col>
      </Container>
    );
};

export default listProduct;