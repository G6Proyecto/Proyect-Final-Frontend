import { NavLink, useNavigate } from "react-router-dom"; // Importa useNavigate
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import Login from "../Login/Login";
import { useContext, useState } from "react";
import UserContext from "../../Context/UserContext";
import Register from "../Register/Register";
import SearchBar from "../Sections/Search/SearchBar";
import Swal from "sweetalert2";

const NavBar = () => {
  const { currentUser, setCurrentUser, RemoveAuth } = useContext(UserContext);
  const navigate = useNavigate(); // Obtiene el objeto de navegación

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRegis, setIsOpenRegis] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleShowRegis = () => {
    setIsOpenRegis(true);
    setIsSidebarOpen(false); // Cerrar sidebar al abrir registro
  };

  const handleCloseRegis = () => {
    setIsOpenRegis(false);
  };

  const handleShow = () => {
    setIsOpen(true);
    setIsSidebarOpen(false); // Cerrar sidebar al abrir login
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const LogOut = () => {
    Swal.fire({
      title: "¿Estás seguro de cerrar sesión?",
      text: "¡Deberás ingresar de nuevo!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Cerrar Sesión",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        let timerInterval;
        Swal.fire({
          title: "¡La sesión se está cerrando!",
          html: "Cerrando sesión en <b></b>.",
          timer: 1500,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
        navigate("/"); 
        RemoveAuth();
        setCurrentUser(undefined);
        setIsSidebarOpen(false); 
      }
    });
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  const handleNavLinkClick = () => {
    setIsSidebarOpen(false); 
  };

  return (
    <>
      <Register isOpenRegis={isOpenRegis} handleCloseRegis={handleCloseRegis} />
      <Login isOpen={isOpen} handleClose={handleClose} />
      <nav className="navcolor navbar-dark navbar navbar-expand-lg text-primary ">
        <div className="container-fluid d-flex justify-content-end">
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            onClick={handleSidebarToggle} 
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`offcanvas offcanvas-start ${
              isSidebarOpen ? "show" : ""
            }`}
          >
            <div className="navcolor offcanvas-header border-botton">
              <h5 className="offcanvas-title text-dark">Bacode</h5>
              <button
                type="button"
                className="btn-close btn-close-black shadow-none"
                onClick={handleSidebarToggle}
              ></button>
            </div>
            <div className="sidebar offcanvas-body d-flex flex-column align-items-center flex-lg-row p-4 p-lg-0 justify-content-around">
              <div>
                <ul className="navbar-nav justify-content-center fs-5 flex-grow-1 pe-3">
                  <li className="nav-item mx-2  navItem">
                    <NavLink
                      to="/"
                      className={"nav-link text-dark"}
                      onClick={handleNavLinkClick}
                    >
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
                             to={`/galery#Hamburguesas`}
                            className={"ps-2 nav-link text-dark dropdownItem"}
                            onClick={handleNavLinkClick} 
                          >
                            {" "}
                            Hamburguesas{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                             to={`/galery#Ensaladas`}
                            className={"ps-2 nav-link text-dark dropdownItem"}
                            onClick={handleNavLinkClick}
                          >
                            {" "}
                            Ensaladas{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                             to={`/galery#Bebidas`}
                            className={"ps-2 nav-link text-dark dropdownItem"}
                            onClick={handleNavLinkClick}
                          >
                            {" "}
                            Bebidas{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                             to={`/galery#Postres`}
                            className={"ps-2 nav-link text-dark dropdownItem"}
                            onClick={handleNavLinkClick} // Cerrar sidebar al hacer clic en una categoría del menú desplegable
                          >
                            {" "}
                            Postres{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavDropdown.Divider />
                        </li>
                        <li>
                          <NavLink
                            to="/galery"
                            className={
                              "menu-btn text-center fw-bolder nav-link text-dark"
                            }
                            onClick={handleNavLinkClick}
                          >
                            {" "}
                            Ver todo{" "}
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item mx-2 navItem">
                    <NavLink
                      to="/contact"
                      className={"nav-link text-dark"}
                      onClick={handleNavLinkClick}
                    >
                      Contacto
                    </NavLink>
                  </li>
                  {currentUser !== undefined &&
                    currentUser.role === "Administrador" && (
                      <li className="nav-item mx-2 navItem">
                        <NavLink
                          to="/Admin"
                          className={"nav-link text-dark"}
                          onClick={handleNavLinkClick}
                        >
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
              <div className="d-flex flex-column flex-lg-row justify-content-start align-items-center gap-3">
                <NavLink
                  to="/error"
                  className={"text-center fw-bolder nav-link text-dark"}
                  onClick={handleNavLinkClick}
                >
                  <i className="bi bi-info-square fs-3 cust-icon"></i>
                </NavLink>

                {currentUser === undefined && (
                  <NavLink
                    className={"sub-btn text-dark "}
                    onClick={handleShow}
                  >
                    Ingresá
                  </NavLink>
                )}
                {currentUser !== undefined && (
                  <button className={"sub-btn text-dark "} onClick={LogOut}>
                    Cerrar Sesión
                  </button>
                )}

                {currentUser === undefined && (
                  <NavLink className={"sub-btn"} onClick={handleShowRegis}>
                    Creá tu cuenta
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
