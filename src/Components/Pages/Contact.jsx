import { Form, Button } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import clsx from "clsx";
import Swal from "sweetalert2";


const Contact = () => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, "Minimo 6 caracteres")
      .max(30, "Maximo 30 caracteres")
      .matches(/^[a-zA-Z0-9]+$/, 'Formato invalido, ingrese unicamente letras.')
      .required("El nombre es requerido"),
    email: Yup.string()
      .email("Formato de correo inválido")
      .min(7, "Minimo 7 caracteres")
      .max(128, "Maximo 128 caracteres")
      .required("El correo es requerido"),
    message: Yup.string()
      .min(4, "Minimo 4 caracteres")
      .max(250, "Maximo 250 caracteres")
      .required("El mensaje es requerido"),
  });

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ContactSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Consulta enviada correctamente",
      });
      formik.resetForm();
    },
  });

  return (
    <div>
      <section className="mb-3 pb-3 container-fluid">
        <h1 className="display-2 text-center">Contacto</h1>
        <hr />
        <article className="row px-4">
          <div className="col-sm-12 col-md-6 my-5 g-5 border border-1 shadow rounded-5">
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="Name" className="my-3">
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre y apellido"
                  maxLength={31}
                  className={clsx("form-control", {
                    "is-invalid": formik.touched.name && formik.errors.name,
                    "is-valid": formik.touched.name && !formik.errors.name,
                  })}
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-danger">{formik.errors.name}</div>
                )}
              </Form.Group>
              <Form.Group controlId="Email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  maxLength={129}
                  className={clsx("form-control", {
                    "is-invalid": formik.touched.email && formik.errors.email,
                    "is-valid": formik.touched.email && !formik.errors.email,
                  })}
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </Form.Group>
              <Form.Group controlId="Message" className="mb-3">
                <Form.Label>Consulta</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  maxLength={251}
                  className={clsx("form-control", {
                    "is-invalid":
                      formik.touched.message && formik.errors.message,
                    "is-valid":
                      formik.touched.message && !formik.errors.message,
                  })}
                  {...formik.getFieldProps("message")}
                />
                {formik.touched.message && formik.errors.message && (
                  <div className="text-danger">{formik.errors.message}</div>
                )}
              </Form.Group>
              <div>
                <button
                  type="submit"
                  variant="primary"
                  className="mx-2 mb-2 sub-btn"
                >
                  Enviar
                </button>
                <button
                  type="button"
                  variant="secondary"
                  className="mx-2 mb-2 sub-btn"
                  onClick={formik.handleReset}
                >
                  Limpiar
                </button>
              </div>
            </Form>
          </div>
          <div className="col-sm-12 col-md-6 d-flex align-items-center px-4">
            <span className="d-none d-md-block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28480.4369198406!2d-65.23808156555384!3d-26.83821515823391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1698109976186!5m2!1ses-419!2sar"
                width="600"
                height="450"
                className="rounded-4"
              ></iframe>
            </span>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Contact;
