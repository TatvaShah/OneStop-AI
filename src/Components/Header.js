import React from "react";
import "../Styles/Header.css";
import logo from "../Images/OSI-TOKEN.png";
import logo2 from "../Images/OSI-WHITE-LOGO.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    // <div className="header-bg">
    //   <div className="d-flex  justify-content-between align-items-center">
    //     <img
    //       src={logo}
    //       alt="logo"
    //       height={40}
    //       className=""
    //       style={{ marginTop: 11 }}
    //     />
    //     <img
    //       src={logo2}
    //       height={40}
    //       alt="logo"
    //       className=""
    //       style={{ marginTop: 11 }}
    //     />

    //     <div>
    //       <ul className="d-flex" style={{ listStyle: "none" }}>
    //         <li>About</li>
    //         <li>Product</li>
    //         <li>Login / SignUp</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div id="header" className="header-bg">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="navbar-brand d-block d-lg-none" href="#">
            <Link to={"/"}>
              <img src={logo2} alt="logo" />
            </Link>
          </div>
          <button
            class="navbar-toggler navbar_toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            style={{ height: 57 }}
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav w-100">
              <li class="nav-item">
                <Link
                  to={"/"}
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  <img src={logo} height={39} alt="logo" />
                </Link>
              </li>
            </ul>
            <div
              class="navbar-brand d-none d-lg-block"
              style={{ marginRight: 0, marginTop: 26 }}
              href="#"
            >
              <Link to={"/"} href="#">
                <img src={logo2} height={60} alt="logo" />
              </Link>
            </div>
            <ul class="navbar-nav w-100 justify-content-end">
              <li class="nav-item">
                <Link to={"/about"} class="nav-link" href="#">
                  ABOUT
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/product"} class="nav-link" href="#">
                  PRODUCT
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/login"} class="nav-link" href="#">
                  log in / SIGN UP
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
