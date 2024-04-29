
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
//import DeleteUsers from "../Sections/DeleteUsers";
import EditUsers from "./EditUsers"; // Importa el componente EditUsers

const Users = ({ user, getUsers, handleShow }) => {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_BCK;

  const deleteuser = () => {
    Swal.fire({
      title: "Está seguro que quiere eliminar el producto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "No, no deseo eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${API}/users/delete/${user._id}`);
          getUsers();
          Swal.fire({
            title: "Éxito",
            text: "Su usuario se eliminó exitosamente",
            icon: "success",
          });
        } catch (error) {
          console.log("El error es", error.message);
        }
      }
    });
  return (
    <>
      <tr className="">
        {/*<td className="text-center m-2">{user.id}</td>
        <td className="text-center m-2">{user.name}</td>*/}
        <td className="text-center m-2">{user.email}</td>
        <td className="text-center m-2">{user.role}</td>
        <td className="d-flex justify-content-around">
          <button
            type="button"
            variant=""
            className="btn-custom-users"
            onClick={() => {
              console.log("modal edicion");
              handleShow(user); // Llama a handleShow para abrir el modal con el usuario correspondiente
            }}
          >
            Cambiar rol

          </button>

          <Button type="button" variant="danger" onClick={deleteuser} id={user._id} role={user.role} getUsers={getUsers}>
            Eliminar
          </Button>
        </td>
      </tr>
    </>
  );
};
}
export default Users;
