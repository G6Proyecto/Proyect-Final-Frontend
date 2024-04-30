
import {useNavigate} from "react-router-dom";
import TableProducts from "../Sections/AdminProducts/TableProducts";
import { Button } from "react-bootstrap";
import "../Sections/AdminProducts/Admin.css"



const Admin = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div className="text-center align-content-center">
        <h1>Administración</h1>
      </div>

        <Button 
          className="m-3 prod"
          onClick={() => {
            navigate("/CreateProducts");
          }}
        >
         CARGAR UN PRODUCTO
        </Button>
       
  
      <TableProducts></TableProducts>

      <Button className="m-3 prod"
          onClick={() => {
            navigate("/ListUsers");
          }}
        >
         ADMINISTRAR USUARIO
        </Button>
      </div>
    
  );
};
export default Admin;

