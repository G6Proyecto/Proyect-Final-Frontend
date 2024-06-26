import NewLogo from "..//logo/BecodeLogo.png";
import { NavLink } from "react-router-dom";

import "./NavBar.css";
import SearchBar from "../Sections/Search/SearchBar";

const Socials = () => {
  return (
    <>
      <div className="container-fluid text-center">
        {/* <!-- Logo --> */}
        <div className=" navcolor row align-items-start">
          <div className="logo col">
            <NavLink to="/" className="navbar-brand fs-2 ">
              <img src={NewLogo} alt="Bacode" />
            </NavLink>
          </div>
          <div className="col d-none d-lg-block">
          <SearchBar></SearchBar>
          </div>
          <div className="col d-flex justify-content-center align-items-center text-center align- pt-4 pb-3 gap-4">
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
        </div>
      </div>
    </>
  );
};

export default Socials;
