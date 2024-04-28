import { useEffect } from "react";
import "../sections/users.css"
import { Modal, Button, Form } from "react-bootstrap";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import axios from "axios";

const EditUser = ({ user, getUsers, show, handleClose }) => {
  const API = import.meta.env.VITE_API;
  
  

  useEffect(() => {
    if (user) { 
      formik.setValues({
        role: user.role || "",
      });
    }
  }, [user]);

  const userSchema = Yup.object().shape({
    role: Yup.string().required("El rol es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      id:"",
      name:"",
      email:"",
      role: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
      // Incluir el ID del usuario en la URL
        if (user.role==="Administrador"){
          Swal.fire({
            title: "No puedes cambiar de rol a este usuario",
            text: "El usuario es un administrador no puede ser modificado",
            icon: "warning",
          });
        }
        else {(user.role!=="Administrador") 
        try {
          const updatedUser = { id: user.id, name:user.name, email:user.email, role: values.role }; // Usar user._id en lugar de values.id
          const response = await axios.put(`${API}/usersAdmin/${user.id}`, updatedUser); 

      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          title: "Error",
          text: "Hubo un error al actualizar el usuario",
          icon: "error",
        });
      }

          Swal.fire({
            title: "¡Éxito!",
            text: "Se actualizó el usuario correctamente",
            icon: "success",
          });
          handleClose();
          getUsers();
        }
       
    },
  });

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" data-bs-theme="dark" className="colors-custom-text">
      <Modal.Header closeButton>
        <Modal.Title className="">Administracion de usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="role">
            <Form.Label>Elige el nuevo rol para el usuario</Form.Label>
            <Form.Select
              
              aria-label="role"
              name="role"
              {...formik.getFieldProps("role")}
              className= {clsx(
                "form-control",
                { "is-invalid": formik.touched.role && formik.errors.role },
                { "is-valid": formik.touched.role && !formik.errors.role }
              )} 
            >
              <option className="" value="">Seleccione un rol</option>
              <option className="" value="Cliente">Cliente</option>
              <option className="" value="Administrador">Administrador</option>
            </Form.Select>
            {formik.touched.role && formik.errors.role && (
              <div className="mt-2 text-danger fw-bold">{formik.errors.role}</div>
            )}
          </Form.Group>
          <div>
            <button type="submit" variant="" className=" bg-custom-colors-modal-success mx-2">
              Guardar
            </button>
            <button
              variant="danger"
              onClick={() => {
               handleClose();
              }}
              className=" bg-custom-colors-modal-cancel
              mx-2"
            >
              Cerrar
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditUser;

