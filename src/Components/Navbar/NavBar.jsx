import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import Login from "../Login/Login";
import { useContext, useState } from "react";
import UserContext from "../../Context/UserContext";
import Register from "../Register/Register";
import SearchBar from "../Sections/Search/SearchBar";

const NavBar = () => {
  const { currentUser, setCurrentUser, RemoveAuth } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const [isOpenRegis, setIsOpenRegis] = useState(false);

  const handleShowRegis = () => {
    setIsOpenRegis(true);
  };

  const handleCloseRegis = () => {
    setIsOpenRegis(false);
  };

  const handleShow = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const LogOut=()=>{
    RemoveAuth();
    setCurrentUser(undefined);
  }

  return (
    <>
    <Register isOpenRegis={isOpenRegis} handleCloseRegis={handleCloseRegis} />
      <Login isOpen={isOpen} handleClose={handleClose} />
      <nav className="navcolor navbar-dark navbar navbar-expand-lg text-primary ">
        <div className="container-fluid d-flex justify-content-end">
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
              <h5
                className="offcanvas-title text-dark"
                id="offcanvasNavbarLabel"
              >
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
            <div className="sidebar offcanvas-body d-flex flex-column align-items-center flex-lg-row p-4 p-lg-0 justify-content-around">
              <div>
                <ul className="navbar-nav justify-content-center fs-5 flex-grow-1 pe-3">
                  <li className="nav-item mx-2  navItem">
                    <NavLink to="/" className={"nav-link text-dark"}>
                      Inicio
                    </NavLink>
                  </li>
                  <li className="nav-item mx-2 navItem">
                    <div className="dropdown">
                      <NavLink
                        to="/"
                        className={"nav-link text-dark dropdown-toggle"}
                        data-bs-toggle="dropdown"
                      >
                        {" "}
                        Menú{" "}
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to="/error"
                            className={"ps-2 nav-link text-dark dropdownItem"}
                          >
                            {" "}
                            Hamburguesas{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/error"
                            className={"ps-2 nav-link text-dark dropdownItem"}
                          >
                            {" "}
                            Ensaladas{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/error"
                            className={"ps-2 nav-link text-dark dropdownItem"}
                          >
                            {" "}
                            Bebidas{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavDropdown.Divider />
                        </li>
                        <li>
                          <NavLink
                            to="/error"
                            className={
                              "menu-btn text-center fw-bolder nav-link text-dark"
                            }
                          >
                            {" "}
                            Ver todo{" "}
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item mx-2 navItem">
                    <NavLink to="/contact" className={"nav-link text-dark"}>
                      Contacto
                    </NavLink>
                  </li>
                  {currentUser !== undefined &&
                    currentUser.role === "Administrador" && (
                      <li className="nav-item mx-2 navItem">
                        <NavLink to="/Admin" className={"nav-link text-dark"}>
                          <i className="bi bi-incognito"></i>
                          Administración
                        </NavLink>
                      </li>
                    )}
                </ul>
                <div className="col d-lg-none">
                  <SearchBar></SearchBar>
                </div>
              </div>
              {/* <!--Login / Sign up  --> */}
              <div className="d-flex flex-column flex-lg-row justify-content-start align-items-center gap-3">
                <NavLink
                  to="/error"
                  className={"text-center fw-bolder nav-link text-dark"}
                >
                  <i className="bi bi-info-square fs-3 cust-icon"></i>
                </NavLink>

                {(currentUser===undefined && <NavLink
                  className={"sub-btn text-dark "}
                  onClick={handleShow}
                >
                  Ingresá
                </NavLink>)}
                {(currentUser!==undefined && <NavLink
                  to="/*"
                  className={"sub-btn text-dark "}
                  onClick={LogOut}
                >
                  Cerrar Sesión
                </NavLink>)}
                
                {(currentUser===undefined && <NavLink to="/" className={"sub-btn"} onClick={handleShowRegis}>
                  Creá tu cuenta
                </NavLink> )}
                
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
