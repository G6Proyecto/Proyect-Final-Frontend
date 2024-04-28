import {  Button, Card, Col, Container } from "react-bootstrap";
import "../product/productStyle.css"
import { Link } from "react-router-dom";

const cardProduct = ({product}) => {
    return (
        <Col>
        <Card 
        style={{background:'var(--fourth)'}}
        className="cardProduct "
        >
        <Button 
         className="bi bi-star-fill buttonCard"
          style={{background:'none', color:'#fff', border:0, fontSize:'2em', marginLeft:'auto'}}>
            </Button>
          <Card.Img variant="top" src="/src/assets/kqXzqebG.png" style={{ height: 'max-content' }} />
          <Card.Body className="text-center">
            <Card.Title className="cardTitle">{product.title}</Card.Title>
            <Container>
            <Link to={`/productDetail/${product.id}`} className="btn btn-primary m-1" style={{backgroundColor:'var(--secondary)',border:'solid 3px #ffff', borderRadius:'12px'}}>Detalles</Link>
            </Container>
          </Card.Body>
        </Card>
        </Col>

    );
};

export default cardProduct;