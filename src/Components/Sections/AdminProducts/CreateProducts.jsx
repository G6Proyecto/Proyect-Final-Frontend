import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import productoImage from "./Img/image.png"
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CreateProducts = () => {

  const API = import.meta.env.VITE_API;

  const navigate = useNavigate();

  const ProductSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, "Mínimo 3 caracteres")
      .max(80, "Máximo 80 caracteres")
      .required("Se requiere nombre del producto"),
    category: Yup.string()
      .required("Se requiere selección de categoría"),
    price: Yup.number()
      .min(100, "El precio mínimo es de 100")
      .max(10000, "El precio máximo es de 10000")
      .required("El precio es requerido"),
    description: Yup.string()
      .min(4, "Mínimo 4 caracteres")
      .max(500, "Máximo 500 caracteres")
      .required("Se requiere breve información del producto"),
    dateStock: Yup.date().required(),
    url: Yup.string()
      .url("La URL de la imagen no es válida")
      .required("Se requiere imagen descriptiva del producto")
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
      console.log("values", values);
      Swal.fire({
        title: "Desea subir el producto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Guardar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await fetch(`${API}/products`, {
              method: "POST",
              headers: { "content-Type": "application/json" },
              body: JSON.stringify(values),
            });

            if (response.status === 201) {
              formik.resetForm();
              Swal.fire({
                title: "Exito!",
                text: "Se creo un nuevo producto",
                icon: "success",
              });
              navigate("/Admin");
            }
          } catch (error) {
            console.log("error", error);
          }
        }
      });
    },
  });

  return (
    <div className="container-fluid">
      <Button className="m-3"
      variant="secondary"
        onClick={() => {
          navigate(-1);
        }}
      >
        ATRÁS
      </Button>
      <h3 className="p-3">Cargar nuevo producto</h3>
      <div className="row">
        <div className="col-lg-6 col-12 mx-auto my-4 rounded border border-3 p-2 shadow">
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

            <Button className="m-3 prod" type="submit">
              GUARDAR
            </Button>
          </Form>
        </div>

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
