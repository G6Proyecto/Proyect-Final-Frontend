import { Table } from "react-bootstrap";
import RowProducts from "./RowProducts";
import EditeProducts from "./EditeProducts";
import { useState, useEffect } from "react";
import axios from "axios";

const TableProducts = () => {
  const API = import.meta.env.VITE_API;
  const [collectionProducts, setCollectionProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [productEdit, setProductEdit] = useState(undefined);

  const handleShow = (product) => {
    setProductEdit(product);
    setShow(true);
  };

  const handleClose = () => {
    setProductEdit(undefined);
    setShow(false);
  };

  const getProducts = async () => {
    try {
      const response = await axios.get(`${API}/collectionProducts`);
      setCollectionProducts(response.data);
    } catch (error) {
      console.log("Error para obtener los productos", error);
    }
  };

  useEffect(() => {
    getProducts();
    return () => {
      setCollectionProducts([]);
    };
  }, []);

  return (
    <div>
      <div>
        <EditeProducts
          show={show}
          handleClose={handleClose}
          collectionProducts={collectionProducts}
          product={productEdit}
          getProducts={getProducts}
        ></EditeProducts>
      </div>
      <div>
        <h2>Tabla de Productos</h2>
      </div>
      <div>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Fecha último control de stock</th>
              <th>URL imagen del producto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {collectionProducts.map((element) => {
              return (
                <RowProducts
                  product={element}
                  key={element.id}
                  handleShow={handleShow}
                  getProducts={getProducts}
                ></RowProducts>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableProducts;
