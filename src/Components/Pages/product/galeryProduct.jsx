import  { useEffect, useState } from 'react';
import axios from 'axios';
import CardProduct from "../product/cardProduct";
import { Col, Container, Row } from "react-bootstrap";

const galeryProduct = () => {
    const API_URL = import.meta.env.VITE_API_BCK;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [products, setProducts] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${API_URL}/products`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error al obtener los productos', error);
            }
        };

        fetchProducts();
    }, []);

    const productsByCategory = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    return (
        <Container className="w-100 my-2">
            {Object.entries(productsByCategory).map(([category, products]) => (
                <div key={category}>
                    <h2 className='text-center mt-4 py-3 title-category'>{category}</h2>
                    <Col >
                        <Row xs={2} md={3} lg={5} className="row-gap-4">
                            {products.map(product => (
                                <CardProduct key={product._id} product={product} />
                            ))}
                        </Row>
                    </Col>
                </div>
            ))}
        </Container>
    );
};

export default galeryProduct;