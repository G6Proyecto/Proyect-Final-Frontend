import Error from "../Images/Error404.jpg";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-container">
      <img src={Error} alt="Imagen de Error404" className="errorImg" />
      <div className="error-content">
        <strong>La pagina deseada no se encontró</strong>
        <div className="mt-3">
          <NavLink to="/" className="sub-btn text-dark">
            Volver al Inicio
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error404;
