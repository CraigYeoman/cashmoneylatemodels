import React from "react";
import logo from "../images/logo.png";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  let date = new Date().getFullYear();

  return (
    <div className="w-100 bg-main mt-3 mx-0">
      <footer className="d-flex flex-wrap justify-content-between align-items-center px-3">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <img src={logo} className="bi" alt="logo" width="80" />
          </a>
          <span className="mb-3 mb-md-0 text-white">
            &copy; {date} Cash Money Late Model Series
          </span>
        </div>

        {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <Nav.Link className="nav-link px-2" href="#top">
            Top of Page
          </Nav.Link>
          <li className="ms-3">
            <a className="text-muted" href="/">
              <svg className="bi" width="24" height="24"></svg>
            </a>
          </li>
        </ul> */}
      </footer>
    </div>
  );
};

export default Footer;
