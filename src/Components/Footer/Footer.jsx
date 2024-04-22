import { Container } from "react-bootstrap";
import NewLogo from "../logo/BecodeLogo.png";
import Fiscal from "../Images/data_fiscal.png";
import { NavLink } from "react-router-dom";
import "../Navbar/NavBar.css";

const Footer = () => {
  return (
    <>
      <Container fluid className="p-0 mb-0 navcolor">
        <div className="container-fluid text-center row d-flex align-items-center">
          <div className="col logo">
            <NavLink to="/" className="navbar-brand fs-2">
              <img src={NewLogo} alt="Bacode" />
            </NavLink>
            <p>&copy; Todos los derechos reservados.</p>
          </div>
          <div className="col-lg-6">
            <div className="row row-cols-lg-2 row-cols-md-1">
              <div className="col-md-12 col-sm-12">
                <NavLink
                  to="/"
                  className={"nav-link text-dark nav-item navItem"}
                >
                  Inicio
                </NavLink>
              </div>
              <div className="col-md-12 col-sm-12">
                <NavLink
                  to="/contact"
                  className={"nav-link text-dark nav-item navItem"}
                >
                  Contacto
                </NavLink>
              </div>
              <div className="col-md-12 col-sm-12">
                <NavLink
                  to="/error"
                  className={"nav-link text-dark nav-item navItem"}
                >
                  Sobre Nosotros
                </NavLink>
              </div>
              <div className="col-md-12 col-sm-12">
                <NavLink
                  to="/error"
                  className={"nav-link text-dark nav-item navItem"}
                >
                  Nuestras Sucursales
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col text-center pt-4">
            <div className="d-flex gap-3 justify-content-center align-items-center pb-2">
              <div className="facebook cust-socials">
                <NavLink
                  to="https://www.facebook.com/"
                  target="_blank"
                  className={"nav-link"}
                >
                  <i className="bi bi-facebook"></i>
                </NavLink>
              </div>
              <div className="whatsapp cust-socials">
                <NavLink
                  to="https://www.whatsapp.com/"
                  target="_blank"
                  className={"nav-link"}
                >
                  <i className="bi bi-whatsapp"></i>
                </NavLink>
              </div>
              <div className="instagram cust-socials">
                <NavLink
                  to="https://www.instagram.com/"
                  target="_blank"
                  className={"nav-link"}
                >
                  <i className="bi bi-instagram"></i>
                </NavLink>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
              <p>+54 381 *** ***</p>
              <div className="">
                <NavLink
                  target="_blank"
                  to="https://www.afip.gob.ar/"
                  className="navbar-brand fs-2"
                >
                  <img src={Fiscal} alt="DataFiscal" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
