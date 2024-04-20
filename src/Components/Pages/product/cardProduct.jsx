import {  Button, Card, Col, Container } from "react-bootstrap";
import "./cardProduct.css"

const cardProduct = () => {
    return (
        <Col>
        <Card className="cardProduct ">
          <Card.Img variant="top" src="/src/assets/kqXzqebG.png" style={{ height: 'max-content' }} />
          <Card.Body>
            <Card.Title>Título de la tarjeta</Card.Title>
            <Card.Text >
            <Container>
            <Button className="">Detalles</Button>
            <Button className="">Fav</Button>
            </Container>
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

    );
};

export default cardProduct;