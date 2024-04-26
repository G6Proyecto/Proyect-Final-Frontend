import FilterProduct from "./product/filterProduct"
import CardProduct from "./product/cardProduct"
import { Col, Container, Row } from "react-bootstrap";
import "../Navbar/NavBar.css"
import { useEffect, useState } from "react";
import axios from "axios";
import CarouselFadeExample from "../CarouselFolder/Carousel";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const API = import.meta.env.VITE_API;

  const getProducts = async ()=>{
    try {
        const response =await axios.get(`${API}/products`)
        setProducts(response.data);
    } catch (error) {
      console.log("Error en get axios---->", error);
    }
  };

  useEffect(()=>{
    getProducts();
    return()=>{
      setProducts([])
    }
  },[])

  const handleCategorySelect = (categoria) => {
    setSelectedCategory(categoria);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <body>
      <CarouselFadeExample />
      <article className="">
        <Container fluid className="mt-4">
          <Row>
            <Col md={3} xs={12}>
              <FilterProduct onCategorySelect={handleCategorySelect} />
            </Col>
            <Col md={9} xs={12} className="mt-2">
              <Row xs={2} md={3} lg={5} className="row-gap-4">
                {filteredProducts.map((element, index)=>{
                  return(
                    <CardProduct product={element} key={index}/>
                  )
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </article>
    </body>
  );
};

export default Home;