
import {useNavigate} from "react-router-dom";
import TableProducts from "../Sections/AdminProducts/TableProducts";
import { Button } from "react-bootstrap";

const Admin = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div className="text-center align-content-center">
        <h1>Administración</h1>
      </div>
      <div className="container my-3 py-3">
        <Button
          variant="primary"
          onClick={() => {
            navigate("/CreateProducts");
          }}
        >
         Cargar un Producto
        </Button>
       
      </div>
      <TableProducts></TableProducts>
      <div className="container d-flex justify-content-center my-3 py-3">
      <Button
          variant="primary"
          onClick={() => {
            navigate("/ListUsers");
          }}
        >
         Administrar Usuarios
        </Button>
      </div>
    </div>
  );
};
export default Admin;

