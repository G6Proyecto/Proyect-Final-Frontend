import { Card, Col, Container } from "react-bootstrap";
import "../product/productStyle.css"
import { Link } from "react-router-dom";

const cardProduct = ({product}) => {
    return (
        <Col>
        <Card 
        style={{background:'var(--fourth)', minHeight:'120px'}}
        className="cardProduct "
        >
            <Card.Img variant="top" src={product.url} style={{height: '150px', objectFit:'contain', marginTop:'1em'}} />
            <Card.Body className="text-center" style={{ height: 'max-content'}}>
            <Card.Title className="cardTitle"  style={{height: '5rem'}}>{product.title}</Card.Title>
            <Container>
            <Link to={`/productDetail/${product._id}`} className="btn btn-primary m-1" style={{backgroundColor:'var(--secondary)',border:'solid 3px #ffff', borderRadius:'12px'}}>Detalles</Link>
            </Container>
          </Card.Body>
        </Card>
        </Col>

    );
};

export default cardProduct;