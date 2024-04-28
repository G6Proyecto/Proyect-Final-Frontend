import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DeleteUsers from "../Sections/DeleteUsers";
//import EditUsers from "../sections/EditUsers"; // Importa el componente EditUsers

const Users = ({ user, getUsers, handleShow }) => {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API;

  const handleDelete = async () => {
    try {
      await axios.delete(`${API}/usersAdmin/${user.id}`);
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
      <tr className="">
        <td className="text-center m-2">{user.id}</td>
        <td className="text-center m-2">{user.name}</td>
        <td className="text-center m-2">{user.email}</td>
        <td className="text-center m-2">{user.role}</td>
        <td className="d-flex justify-content-around">
          <button
            type="button"
            variant=""
            className="colors-button-text bg-custom-colors-modal-success m-2"
            onClick={() => {
              console.log("modal edicion");
              handleShow(user); // Llama a handleShow para abrir el modal con el usuario correspondiente
            }}
          >
            Cambiar rol

          </button>
          
          <DeleteUsers className="" id={user.id} role={user.role} getUsers={getUsers}>
            Eliminar
          </DeleteUsers>
        </td>
      </tr>
    </>
  );
};

export default Users;
