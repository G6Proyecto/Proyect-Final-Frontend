import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import clsx from "clsx";
import { Modal, Form } from "react-bootstrap";
import UserContext from "../../Context/UserContext";

const Register = ({ isOpenRegis, handleCloseRegis }) => {
  const API = import.meta.env.VITE_API;
  const { setCurrentUser, SaveAuth } = useContext(UserContext);
  const [isLoadingRegis, setIsLoadingRegis] = useState(false);

  const onSubmit = async (values) => {
    setIsLoadingRegis(true);
    try {
      const response = await axios.post(`${API}/users`, values);
      if (response.status === 201) {
        SaveAuth(response.data);
        setCurrentUser(response.data);
        formik.resetForm();
        setIsLoadingRegis(false);
        handleCloseRegis();
      }
    } catch (error) {
      setIsLoadingRegis(false);
      alert(`${error.response.data.message}`);
      console.error(error);
    }
  };

  const RegisSchema = Yup.object().shape({
    email: Yup.string()
      .email("Formato invalido")
      .min(7)
      .max(128)
      .required("El email es requerido"),
    password: Yup.string()
      .min(7)
      .max(128)
      .required("La contraseña es requerida"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("La contraseña es requerida"),
  });

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    role: "cliente",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegisSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: onSubmit,
  });

  return (
    <>
      <Modal
        show={isOpenRegis}
        onHide={handleCloseRegis}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="bg-3rd">
          <Modal.Title>Registrarme</Modal.Title>
        </Modal.Header>
        <Modal.Body className="navcolor rounded">
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
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
                placeholder="Ingrese su contraseña"
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
            <Form.Group className="mb-3" controlId="PasswordConfirm">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repita su contraseña"
                name="confirmPassword"
                {...formik.getFieldProps("confirmPassword")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid":
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword,
                  },
                  {
                    "is-valid":
                      formik.touched.confirmPassword &&
                      !formik.errors.confirmPassword,
                  }
                )}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.confirmPassword}</span>
                  </div>
                )}
            </Form.Group>
            <div>
              <button
                variant="primary"
                type="submit"
                className="mx-2 mb-2 btn-in"
                disabled={isLoadingRegis}
              >
                {isLoadingRegis ? (
                  <div className="d-flex align-items-center justify-content-center">
                    <strong role="status">Guardando</strong>
                    <div
                      className="spinner-border spinner-border-sm ms-auto"
                      aria-hidden="true"
                    ></div>
                  </div>
                ) : (
                  <>Registrarme</>
                )}
              </button>
              <button
                variant="secondary"
                onClick={handleCloseRegis}
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

export default Register;
