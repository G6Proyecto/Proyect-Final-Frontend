import { useEffect, useState } from "react";
import { Table, Form, Row, Col } from "react-bootstrap";
import Users from "../Sections/users.jsx"
import  axios  from "axios";
import EditUser from "../Sections/EditUsers.jsx";

const ListUsers = () => {
  const [user, setUser] = useState([]);
 const [show, setShow] = useState(false);
  const [usersEdit, setUsersEdit] = useState(undefined);
  //const [filtroRol, setFiltroRol] = useState("");
//  const [busquedaNombre, setBusquedaNombre] = useState("");

  const handleClose = () => {
    setUsersEdit(undefined);
    setShow(false);
  };

  const handleShow = (user) => {
    setUsersEdit(user);
    setShow(true);
  };

  const API_URL = import.meta.env.VITE_API;

  const getUsers = async () => {
    try {
      let URL = `${API_URL}/usersAdmin`;
      const response = await axios.get(URL); // Realizar solicitud GET con Axios
      setUser(response.data); // Establecer los usuarios en el estado
    } catch (error) {
      console.log("ERROR-->", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
     <EditUser
        show={show}
        handleClose={handleClose}
        user={usersEdit}
        getUsers={getUsers}
      />
      <div className="container-fluid">
        <div className="text-center">
          <h2>Usuarios Registrados</h2>
        </div>
        <div className="container-fluid">
        </div>
        <div className="table-responsive">
          <Table striped bordered hover variant="">
            <thead>
              <tr className="">
                <th className="text-center m-2">ID</th>
                <th className="text-center m-2">Nombre</th>
                <th className="text-center m-2">Email</th>
                <th className="text-center m-2">Rol</th>
                <th className="text-center m-2">Acciones</th>
                
              </tr>
            </thead>
            <tbody className="">
              {user.map((users) => {
                return (

                <Users
                  user={users}
                  handleShow={handleShow}
                  key={users.id}
                  getUsers={getUsers}
                />)
}) }
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ListUsers ;
