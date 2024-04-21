import { Button } from "react-bootstrap";
import "./borrarUsers.css";
import axios from "axios";
import Swal from "sweetalert2";

const DeleteUsers = ({ id, getUsers }) => {
  const API = import.meta.env.VITE_API;
  const handleDelete = () => {
    Swal.fire({
      title: "Estas seguro de eliminar este usarios?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "No, me equivoque",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${API}/users/` + id);
          getUsers();
        } catch (error) {
          console.log("ERROR-->", error);
        }
        Swal.fire({
          title: "Exito!",
          text: "se elimino un users",
          icon: "success",
        });
      }
    });
  };

  return (
    <Button type="button" variant="danger" onClick={handleDelete}>
      Eliminar
    </Button>
  );
};

export default DeleteUsers;
