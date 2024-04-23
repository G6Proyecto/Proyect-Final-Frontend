import { Button, Modal, Form } from "react-bootstrap";
import "../Navbar/NavBar.css";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

const Login = ({ isOpen, handleClose }) => {
  const API=import.meta.env.VITE_API;
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Formato invalido")
      .min(7)
      .max(128)
      .required("El email es requerido"),
    password: Yup.string().min(6).max(30).required(),
  });
  

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      try {
        const response=await axios.post(`${API}/users/login`, values);
        if (response.status===200) {
          formik.resetForm();
          handleClose();
        } else {
          alert('Ocurrio un error')
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <Modal show={isOpen} onHide={handleClose} className="modal-bg">
        <div className="border border-1rounded-5">
          <Modal.Header closeButton className="">
            <Modal.Title>Ingresá</Modal.Title>
          </Modal.Header>
          <Modal.Body className="">
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresá tu email"
                  name="email"
                  {...formik.getFieldProps("email")}
                  className={clsx(
                    "form-control",
                    {
                      "is-invalid": formik.touched.email && formik.errors.email,
                    },
                    {
                      "is-valid": formik.touched.email && !formik.errors.email,
                    }
                  )}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.email}</span>
                  </div>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="Password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresá tu contraseña"
                  name="password"
                  {...formik.getFieldProps("password")}
                  className={clsx(
                    "form-control",
                    {
                      "is-invalid":
                        formik.touched.password && formik.errors.password,
                    },
                    {
                      "is-valid":
                        formik.touched.password && !formik.errors.password,
                    }
                  )}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.password}</span>
                  </div>
                )}
              </Form.Group>

              <div>
                <Button
                  type="submit"
                  variant="primary"
                  className="mx-2 sub-btn"
                >
                  Ingresar
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  className="mx-2 sub-btn btn-danger"
                >
                  Cerrar
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default Login;
