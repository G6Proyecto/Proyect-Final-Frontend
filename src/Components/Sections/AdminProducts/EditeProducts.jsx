/* eslint-disable react/prop-types */
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ModalEditar = ({ show, handleClose, product, getProducts }) => {
  const API = import.meta.env.VITE_API;
  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      formik.setFieldValue("title", product.title, true);
      formik.setFieldValue("category", product.category, true);
      formik.setFieldValue("price", product.price, true);
      formik.setFieldValue("description", product.description, true);
      formik.setFieldValue("dateStock", product.dateStock, true);
      formik.setFieldValue("url", product.url, true);
    }
  }, [product]);

  const ProductSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, "Mínimo 3 caracteres")
      .max(80, "Máximo 80 caracteres")
      .required("Se requiere nombre del producto"),
    category: Yup.string().required("Se requiere selección de categoría"),
    price: Yup.number()
      .min(100, "El precio mínimo es de 100")
      .max(10000, "Máximo 8 caracteres")
      .required("El precio mínimo es de 100"),
    description: Yup.string()
      .min(4, "Mínimo 5 caracteres")
      .max(500, "Máximo 200 caracteres")
      .required("Se requiere breve información del producto"),
    dateStock: Yup.date(),
    url: Yup.string()
      .required("Se requiere imagen descriptiva del producto")
      .url("La URL de la imagen no es válida")
  });

  const getCurrentDate = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    return currentDate;
  };

  const initialValues = {
    title: "",
    category: "",
    price: "",
    description: "",
    dateStock: getCurrentDate(),
    url: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ProductSchema,
    validationOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      Swal.fire({
        title: "Estás seguro de modificar el producto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí",
        cancelButtonText: "No, volver atrás",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await axios.put(
              `${API}/products/update/${product._id}`,
              values
            );

            if (response.status === 201) {
              Swal.fire({
                title: "Exito!",
                text: "Se actualizó el producto exitosamente",
                icon: "success",
              });
              navigate("/Admin");
              closeHand();
            }
          } catch (error) {
            console.log("error", error);
          }
        }
      });
    },
  });

  const closeHand = () => {
    getProducts();
    formik.resetForm();
    handleClose();
  };

  return (
    <>
      <Modal show={show} backdrop="static" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label className="text-start p-1">Título</Form.Label>
              <Form.Control
                type="text"
                maxLength={30}
                minLength={3}
                placeholder="Ingrese aquí el nombre del producto"
                name="title"
                {...formik.getFieldProps("title")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid": formik.touched.title && formik.errors.title,
                  },
                  {
                    "is-valid": formik.touched.title && !formik.errors.title,
                  }
                )}
              />
              {formik.touched.title && formik.errors.title && (
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.title}</span>
                </div>
              )}
            </Form.Group>

             <Form.Group controlId="category">
              <Form.Label>Categoría</Form.Label>
              <Form.Select
                aria-label="category"
                name="category"
                {...formik.getFieldProps("category")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid":
                      formik.touched.category && formik.errors.category,
                  },
                  {
                    "is-valid":
                      formik.touched.category && !formik.errors.category,
                  }
                )}
              >
                <option value="">Seleccione una Categoría</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Hamburguesas">Hamburguesas</option>
                <option value="Ensaladas">Ensaladas</option>
                <option value="Postres">Postres</option>
              </Form.Select>
              {formik.touched.category && formik.errors.category && (
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.category}</span>
                </div>
              )}
            </Form.Group>

            <Form.Group className="p-1" controlId="price">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el precio del producto"
                name="price"
                {...formik.getFieldProps("price")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid": formik.touched.price && formik.errors.price,
                  },
                  {
                    "is-valid": formik.touched.price && !formik.errors.price,
                  }
                )}
              />
              {formik.touched.price && formik.errors.price && (
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.price}</span>
                </div>
              )}
            </Form.Group>

            <Form.Group className="p-1" controlId="description">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Ingrese la información general del producto"
                rows={3}
                maxLength={500}
                minLength={4}
                name="description"
                {...formik.getFieldProps("description")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid":
                      formik.touched.description && formik.errors.description,
                  },
                  {
                    "is-valid":
                      formik.touched.description && !formik.errors.description,
                  }
                )}
              />
              {formik.touched.description && formik.errors.description && (
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.description}</span>
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="dateStock">
              <Form.Label>Fecha último control de stock</Form.Label>
              <Form.Control
                type="date"
                placeholder="Ingrese la fecha del último control de stock"
                name="dateStock"
                value={formik.values.dateStock}
                onChange={formik.handleChange}
              />
            </Form.Group>

            <Form.Group className="p-1" controlId="url">
              <Form.Label>URL de la imagen del producto</Form.Label>
              <Form.Control
                type="text"
                name="url"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.url}
                {...formik.getFieldProps("url")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid": formik.touched.url && formik.errors.url,
                  },
                  {
                    "is-valid": formik.touched.url && !formik.errors.url,
                  }
                )}
              />
              {formik.touched.url && formik.errors.url && (
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.url}</span>
                </div>
              )}
            </Form.Group>

            <Button variant="primary" className="mx-2" type="submit">
              Guardar
            </Button>
            <Button
              variant="danger"
              className="mx-2"
              onClick={() => {
                formik.resetForm();
                closeHand();
              }}
            >
              Cerrar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEditar;
