
import {useNavigate} from "react-router-dom";
import TableProducts from "../Sections/AdminProducts/TableProducts";
import "../Sections/AdminProducts/Admin.css"



const Admin = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div className="text-center align-content-center">
        <h1>Administración</h1>
      </div>

        <button 
          className="ms-5 prod"
          onClick={() => {
            navigate("/CreateProducts");
          }}
        >
         CARGAR UN PRODUCTO
        </button>
       
  
      <TableProducts></TableProducts>

      <button className="ms-5 m-3 prod"
          onClick={() => {
            navigate("/ListUsers");
          }}
        >
         ADMINISTRAR USUARIO
        </button>
      </div>
    
  );
};
export default Admin;

