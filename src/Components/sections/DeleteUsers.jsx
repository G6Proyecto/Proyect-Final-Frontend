
import { Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import "../Sections/users.css";

const DeleteUsers = ({ id, getUsers, role }) => {
  const API = import.meta.env.VITE_API_BCK;
  
  const handleDelete = async () => {
    if (role === "Administrador") {
      // Mostrar un mensaje de que el usuario no puede ser eliminado
      Swal.fire({
        title: "No puedes eliminar a este usuario",
        text: "El usuario es un administrador y no puede ser eliminado",
        icon: "warning",
      });
    } else {
      Swal.fire({
        title: "¿Estás seguro de eliminar este usuario?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar",
        cancelButtonText: "No, me equivoqué",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.delete(`${API}/users/delete/${id}`);
            
            Swal.fire({
              title: "Éxito",
              text: "El usuario ha sido eliminado",
              icon: "success",
            });
            getUsers()
          } catch (error) {
            console.log("ERROR-->", error);
            Swal.fire({
              title: "Error",
              text: "Hubo un error al intentar eliminar el usuario",
              icon: "error",
            });
          }
        }
      });
    }
  };

  return (
    <button type="button" variant="" className="mx-2 btn-delete" onClick={handleDelete}>
      Eliminar
    </button>
  );
};

export default DeleteUsers;
