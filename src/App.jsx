
import NavBar from "./Components/Navbar/NavBar";
import Socials from "./Components/Navbar/Socials";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Admin from "./Components/Pages/Admin";
import Error404 from "./Components/Pages/Error404";
import Contact from "./Components/Pages/Contact";
import CarouselFadeExample from "./Components/CarouselFolder/Carousel";
import ListProducts from "./Components/Pages/product/listProduct";
import FilterProduct from "./Components/Pages/product/filterProduct";
import { Col, Container, Row } from "react-bootstrap";



function App() {
  return (
    <>
      <BrowserRouter>
        <header className="sticky-top">
          <Socials />
          <NavBar />
        </header>
        <main className="">
          <CarouselFadeExample />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/error" element={<Error404 />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Container fluid className="mt-4">
            <Row>
              <Col md={3} xs={12}>
              <FilterProduct></FilterProduct>
              </Col>
              <Col md={9} xs={12} className="mt-2">
              <ListProducts></ListProducts>
              </Col>
            </Row>
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
