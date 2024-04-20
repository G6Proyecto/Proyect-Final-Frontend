import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import productoImage from "./Img/img-adminProduc.webp";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

const CreateProducts = () => {
  // const navigate = useNavigate();
  const API = import.meta.env.VITE_API;
  console.log("api", API);


  const ProductoSchema = Yup.object().shape({
    products: Yup.string()
      .min(3, "Mínimo 3 caracteres")
      .max(30, "Máximo 30 caracteres")
      .required("Se requiere nombre del producto"),
    category: Yup.string().required("Se requiere selección de categoría"),
    price: Yup.string()
      .min(1, "Mínimo 1 caracter")
      .max(8, "Máximo 8 caracteres")
      .required("Se requiere ingresar precio"),
    description: Yup.string()
      .min(5, "Mínimo 5 caracteres")
      .max(200, "Máximo 200 caracteres")
      .required("Se requiere breve información del producto"),
    dateStock: Yup.date().required(
      "La fecha del último control del stock es requerida"
    ),
    url: Yup.string().required("Se requiere imágen descriptiva del producto"),
  });

  const initialValues = {
    products: "",
    category: "",
    price: "",
    description: "",
    dateStock: "",
    url: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ProductoSchema,
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
              // navigate("/Admin");
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
      <h2>Administración de Productos</h2>

      <Button variant="secondary">
        Atras
      </Button>

      <div className="row">
        {/* Primera columna */}
        <div className="col-lg-6 col-12 mx-auto my-4 rounded border border-3 p-2 shadow">
          <h3 className="p-3">Crear nuevo producto</h3>

          {/*Se inicia el formulario  */}
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="products">
              <Form.Label className="text-start p-1">Producto</Form.Label>
              <Form.Control
                type="text"
                maxLength={30}
                minLength={3}
                placeholder="Ingrese aquí el nombre del producto"
                //Inicio validacion con formik
                name="products"
                {...formik.getFieldProps("products")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid":
                      formik.touched.products && formik.errors.products,
                  },
                  {
                    "is-valid":
                      formik.touched.products && !formik.errors.products,
                  }
                )}
              />
              {formik.touched.products && formik.errors.products && (
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.products}</span>
                </div>
              )}
            </Form.Group>

            {/* Categoria */}

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
                <option value="1">Bebidas</option>
                <option value="2">Hamburguesas</option>
                <option value="3">Ensaladas</option>
                <option value="4">Postres</option>
              </Form.Select>
              {formik.touched.category && formik.errors.category && (
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.category}</span>
                </div>
              )}
            </Form.Group>

            {/* Precio */}

            <Form.Group className="p-1" controlId="price">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el precio del producto"
                maxLength={8}
                minLength={1}
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

            {/* Descripcion */}
            <Form.Group className="p-1" controlId="description">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Ingrese la información general del producto"
                rows={3}
                maxLength={200}
                minLength={10}
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

            {/* Fecha ultimo stock */}
            <Form.Group className="mb-3" controlId="dateStock">
              <Form.Label>Fecha último control de stock</Form.Label>
              <Form.Control
                type="date"
                placeholder="Ingrese la fecha del último control de stock"
                name="dateStock"
                {...formik.getFieldProps("dateStock")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid":
                      formik.touched.dateStock && formik.errors.dateStock,
                  },
                  {
                    "is-valid":
                      formik.touched.dateStock && !formik.errors.dateStock,
                  }
                )}
              />
              {formik.touched.dateStock && formik.errors.dateStock && (
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.dateStock}</span>
                </div>
              )}
            </Form.Group>

            {/* URL */}
            <Form.Group className="p-1" controlId="url">
              <Form.Label>URL imágen del producto</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="url"
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
