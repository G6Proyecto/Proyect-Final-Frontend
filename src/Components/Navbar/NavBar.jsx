import BacodeLogo from "../logo/BacodeLogo.svg";
import { NavLink } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navcolor navbar-dark navbar navbar-expand-lg text-primary sticky-top">
      <div className="container">
        {/* <!-- Logo --> */}
        <div className="logo">
          {/* <a className="navbar-brand fs-4" href="Index.html">
              <img src={BacodeLogo} alt="Bacode" />
            </a> */}
          <NavLink to="/" className="navbar-brand fs-2">
            <img src={BacodeLogo} alt="Bacode" />
          </NavLink>
        </div>
        {/* <!-- Toggler Btn--> */}
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- SideBar --> */}
        <div
          className=" offcanvas offcanvas-start"
          tabIndex="0"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          {/* <!-- SideBar Header --> */}
          <div className="navcolor offcanvas-header border-botton">
            <h5 className="offcanvas-title text-dark" id="offcanvasNavbarLabel">
              Bacode
            </h5>
            <button
              type="button"
              className="btn-close btn-close-black shadow-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          {/* <!-- SideBar Body --> */}
          <div className="sidebar offcanvas-body d-flex flex-column align-items-center flex-lg-row p-4 p-lg-0">
            <ul className="navbar-nav justify-content-center fs-5 flex-grow-1 pe-3">
              <li className="nav-item mx-2">
                
                <NavLink to="/" className={'nav-link text-dark'}> Inicio </NavLink>
              </li>
              <li className="nav-item mx-2">
              {/* <NavLink to="/error" className={'nav-link text-dark'}> Menú </NavLink> */}
              <NavDropdown title="Menú" className="border border-2 border-black rounded-2 bg-danger">
              <NavDropdown.Item href="/error">Burgers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ver todo...
              </NavDropdown.Item>
            </NavDropdown>
              </li>
              <li className="nav-item mx-2">
              <NavLink to="/contact" className={'nav-link text-dark'}> Contacto </NavLink>
              </li>
              <li className="nav-item mx-2">
              <NavLink to="/error" className={'nav-link text-dark'}> Ayuda </NavLink>
              </li>
              <li className="nav-item mx-2">
              <NavLink to="/admin" className={'nav-link text-dark text-decoration-line-through'}> Administración </NavLink>
              </li>
            </ul>
            {/* <!--Login / Sign up  --> */}
            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
              
              <NavLink to="/error" className={'sub-btn px-5 mx-5  text-dark '}> Ingresá </NavLink>
              <NavLink to="/" className={'sub-btn  text-dark'}> Creá tu cuenta </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
