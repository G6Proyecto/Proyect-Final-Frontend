import  axios  from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//import Swal from "sweetalert2";
const Users = ({ user, handleShow, getUsers }) => {
const navigate = useNavigate();
    const API = import.meta.env.VITE_API;
    /* const handleDelete = () => {
      Swal.fire({
        title: "Estas seguro de eliminar este usuario?",
  
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar",
        cancelButtonText: "No, me equivoque",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.delete(`${API}/users/${user._id}`)
            getUsers();
          } catch (error) {
            console.log("ERROR-->", error);
          }
          Swal.fire({
            title: "Exito!",
            text: "se elimino un usuario",
            icon: "success",
          });
        }
      });
    };
    */
    return (
      <>
      
        <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td className="d-flex justify-content-around">
          <Button
            type="button"
            variant="warning"
            /*onClick={() => {
              navigate(`/editar/${user._id}`);
            }}*/
          >
            Editar
          </Button>
         {/* <Button
            type="button"
            variant="success"
            onClick={() => {
              console.log("modal edicion");
              handleShow(user);
            }}
          >
            M.Editar
          </Button>*/}

          <Button type="button" variant="danger">
            Eliminar
          </Button>
          {/* <Borraruser id={user.id} getusers={getusers} /> */}
        </td>
      </tr>
      </>
    );
  };
  
  export default Users;