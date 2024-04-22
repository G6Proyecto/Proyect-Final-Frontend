import {  Button, Card, Col, Container } from "react-bootstrap";
import "./cardProduct.css"
import { Link } from "react-router-dom";

const cardProduct = ({product}) => {
    return (
        <Col>
        <Card className="cardProduct ">
          <Card.Img variant="top" src="/src/assets/kqXzqebG.png" style={{ height: 'max-content' }} />
          <Card.Body className="text-center">
            <Card.Title className="cardTitle">{product.title}</Card.Title>
            <Container>
            <Link to={`/productDetail/${product.id}`} className="btn btn-primary">Detalles</Link>
            <Button className="">Fav</Button>
            </Container>
          </Card.Body>
        </Card>
        </Col>

    );
};

export default cardProduct;