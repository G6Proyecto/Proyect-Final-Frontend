import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import productoImage from "./Img/img-adminProduc.webp";
// import clsx from "clsx";
// import * as Yup from "yup";
// import { useFormik } from "formik";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

const CreateProducts = () => {
  const API = import.meta.env.VITE_API;
  console.log("api", API);
  //   const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <h2>Administración de Productos</h2>
      <div className="row">
        {/* Primera columna */}
        <div className="col-lg-6 col-12 mx-auto my-4 rounded border border-3 p-2 shadow">
          <h3 className="p-3">Crear nuevo producto</h3>
          <Form> 
            <Form.Group>
            <Form.Label className="text-start p-1">PRODUCTO</Form.Label>
            <Form.Control
                type="text"
                maxLength={15}
                minLength={1}
              />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label className="text-start p-1">CATEGORIA</Form.Label>
              <Form.Select aria-label="category">
                <option value="">Seleccione una Categoría</option>
                <option value="1">Bebidas</option>
                <option value="2">Hamburguesas</option>
                <option value="3">Ensaladas</option>
                <option value="4">Postres</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="p-1" controlId="price">
              <Form.Label>PRECIO</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el precio del producto"
                maxLength={8}
                minLength={1}
              />
            </Form.Group>

            <Form.Group className="p-1" controlId="description">
              <Form.Label>DESCRIPCIÓN</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Ingrese la información general del producto"
                rows={3}
                maxLength={200}
                minLength={10}/>
            </Form.Group>

            <Form.Group className="p-1" controlId="url">
              <Form.Label>URL IMÁGEN DEL PRODUCTO</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="danger" type="submit">
              Subir
            </Button>
          </Form>
        </div>

        {/* Segunda columna */}
        <div className="col-lg-6 col-12 d-flex align-items-start justify-content-center mx-auto my-4">
          <img
            className="img-fluid w-100 h-75 rounded border border-3"
            src={productoImage}
            alt="Foto del producto"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProducts;
