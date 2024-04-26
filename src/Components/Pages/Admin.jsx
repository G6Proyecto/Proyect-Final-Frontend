
import {useNavigate} from "react-router-dom";
import TableProducts from "../Sections/AdminProducts/TableProducts";
import { Button } from "react-bootstrap";

const Admin = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div>
        <h1>Aministración</h1>
      </div>
      <div className="container my-3 py-3">
        <Button
          variant="primary"
          onClick={() => {
            navigate("/CreateProducts");
          }}
        >
         Crear Producto
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

