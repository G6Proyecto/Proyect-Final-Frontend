import { useEffect, useState } from 'react';
import axios from 'axios';
import CardProduct from "../product/cardProduct";
import { Col, Container, Row } from 'react-bootstrap';
import '../product/productStyle.css'

const ProductGallery = () => {
    const API = import.meta.env.VITE_API_BCK;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${API}/products/featureProducts`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error al obtener los productos', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
        <h2 className="prodFeatured text-center py-4">PRODUCTOS DESTACADOS</h2>
      <Container className='d-flex align-items-center' style={{height:'60vh'}}>
        <Col>
          <Row xs={2} md={3} lg={5} className="row-gap-4">
            {products.map((product) => (
              <CardProduct key={product._id} product={product} />
            ))}
          </Row>
        </Col>
      </Container>
      </>
    );
    
};

export default ProductGallery;