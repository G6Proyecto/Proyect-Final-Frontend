import { Row } from "react-bootstrap";
import CardProduct from "./cardProduct";

import "./listProduct.css"

const listProduct = () => {
    return (
      
        <Row xs={2} md={3} lg={5} className="row-gap-4">
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
    );
};

export default listProduct;