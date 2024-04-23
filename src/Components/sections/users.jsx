import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DeleteUsers from "../sections/DeleteUsers";
import EditUsers from "../sections/EditUsers"; // Importa el componente EditUsers

const Users = ({ user, getUsers, handleShow }) => {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API;

  const handleDelete = async () => {
    try {
      await axios.delete(`${API}/users/${user._id}`);
      getUsers();
      Swal.fire({
        title: "Exito!",
        text: "Se eliminó un usuario",
        icon: "success",
      });
    } catch (error) {
      console.log("ERROR-->", error);
    }
  };

  return (
    <>
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td className="d-flex justify-content-around">
          <Button
            type="button"
            variant="success"
            onClick={() => {
              console.log("modal edicion");
              handleShow(user); // Llama a handleShow para abrir el modal con el usuario correspondiente
            }}
          >
            Cambiar rol
          </Button>
          <DeleteUsers id={user.id} role={user.role} getUsers={getUsers}>
            Eliminar
          </DeleteUsers>
        </td>
      </tr>
    </>
  );
};

export default Users;
