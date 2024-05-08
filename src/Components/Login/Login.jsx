import { Modal, Form } from "react-bootstrap";
import "../Navbar/NavBar.css";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../../Context/UserContext";

const Login = ({ isOpen, handleClose }) => {
  const API = import.meta.env.VITE_API;
  const { setCurrentUser, SaveAuth } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Formato invalido")
      .min(7)
      .max(128)
      .required("El email es requerido"),
    password: Yup.string()
      .min(6)
      .max(30)
      .required("La contraseña es requerido"),
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
      setIsLoading(true);
      Swal.fire({
        title: "Iniciando sesión",
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        const response = await axios.post(`${API}/users/login`, values);
        if (response.status === 200) {
          SaveAuth(response.data);
          setCurrentUser(response.data);
          formik.resetForm();
          setIsLoading(false);
          Swal.close(), handleClose();
        } else {
          setIsLoading(false);
          Swal.close(), alert("Ocurrio un error");
        }
      } catch (error) {
        setIsLoading(false);
        Swal.close(), alert(`${error.response.data.message}`);
        console.error(error);
      }
    },
  });

  return (
    <>
      <Modal
        show={isOpen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="bg-3rd">
          <Modal.Title>Ingresá</Modal.Title>
        </Modal.Header>
        <Modal.Body className="navcolor rounded">
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
              <button
                type="submit"
                variant="primary"
                className="mx-2 mb-2 btn-in"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="d-flex align-items-center justify-content-center">
                    <strong role="status">Ingresando</strong>
                    <div
                      className="spinner-border spinner-border-sm ms-auto"
                      aria-hidden="true"
                    ></div>
                  </div>
                ) : (
                  <>Ingresar</>
                )}
              </button>
              <button
                variant="secondary"
                onClick={handleClose}
                className="mx-2 mb-2 btn-out"
              >
                Cerrar
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
