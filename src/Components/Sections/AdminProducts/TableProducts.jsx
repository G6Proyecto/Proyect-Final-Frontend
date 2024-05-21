import { Table } from "react-bootstrap";
import RowProducts from "./RowProducts";
import EditeProducts from "./EditeProducts";
import { useState, useEffect } from "react";
import axios from "axios";


const TableProducts = () => {
  const API = import.meta.env.VITE_API;
  const [products, setproducts] = useState([]);
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
      const response = await axios.get(`${API}/products`);
      setproducts(response.data);
    } catch (error) {
      console.log("Error para obtener los productos", error);
    }
  };

  useEffect(() => {
    getProducts();
    return () => {
      setproducts([]);
    };
  }, []);

  return (
    <div>
      <div>
        <EditeProducts
          show={show}
          handleClose={handleClose}
          products={products}
          product={productEdit}
          getProducts={getProducts}
        ></EditeProducts>
      </div>
      <div className="container-fluid">
        <div className="text-center">
          <h2>Tabla de Productos</h2>
        </div>
        <div className="table-responsive">
          <Table
            className="table-responsive table-striped table-bordered table-hover table-dark"
          >
            <thead>
              <tr>
                <th className="text-center align-content-center">Título</th>
                <th className="text-center align-content-center">Categoría</th>
                <th className="text-center align-content-center">Precio</th>
                <th className="text-center align-content-center">
                  Descripción
                </th>
                <th className="text-center align-content-center">
                  Fecha último control de stock
                </th>
                <th className="text-center align-content-center">
                  Imagen del producto
                </th>
                <th className="text-center align-content-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((element, index) => {
                return (
                  <RowProducts
                    product={element}
                    key={index}
                    handleShow={handleShow}
                    getProducts={getProducts}
                  ></RowProducts>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TableProducts;
