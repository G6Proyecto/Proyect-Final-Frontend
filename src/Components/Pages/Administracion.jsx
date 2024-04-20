// import {useNavigate} from "react-router-dom";
import CreateProducts from "../Sections/AdminProducts/CreateProducts";
// import { Button } from "react-bootstrap";


const Administracion = () => {

        // const navigate=useNavigate(); 
        return (
            <div>
                <div className="container my-3 py-3">
                 {/* <Button variant="primary" >Crear Producto</Button>   */}
                <CreateProducts></CreateProducts>
                </div> 
             
            </div>
          
        );
    }
export default Administracion;