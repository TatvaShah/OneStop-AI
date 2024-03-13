// Header.js
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Styles/Header.css"; // Import the CSS file
import { MyContext } from "../hooks/MyContextProvider";
import useToken from "../hooks/useToken";

const Header = () => {
  const {  userDetails } = useToken();
  const navigate = useNavigate()
  const { token, updateToken } = useContext(MyContext);
  const [showNavbar, setShowNavbar] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };


  const handleSignOut = () => {
    updateToken("");
    localStorage.clear();
    navigate("/login")
  }
 

  return (
    

    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <div
            className="logo"
            style={{
              color: "#e3cd9f",
              textDecoration: "upperCase",
              fontSize: 25,
            }}
          >
            One Stop AI
          </div>
        </div>
        <nav>
          <div className="nav-mobile">
            <a
              onClick={() => {
                handleShowNavbar();
              }}
              id="nav-toggle"
              href="#!"
              className={`${showNavbar ? "active" : ""}`}
            >
              <span></span>
            </a>
          </div>
          <ul
            className="nav-list"
            style={{ display: showNavbar ? "block" : "none" }}
          >
            <li className="custom-li-hover">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="custom-li-hover">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="custom-li-hover">
              <NavLink to="/product">Products</NavLink>
            </li>
            <li className="custom-li-hover">
              <NavLink to="/ositoken">OSI Token</NavLink>
            </li>
            {token ? (
              <li>
                <NavLink onClick={() => setShowMenu(!showMenu)}>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span style={{ marginLeft: 5 }}>
                    {" "}
                    {userDetails?.firstName}
                  </span>
                </NavLink>

                <ul
                  onMouseLeave={() => setShowMenu(false)}
                  className="nav-dropdown"
                  style={{ display: showMenu ? "block" : "none" }}
                >
                  <li className="custom-li-hover">
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  <li className="custom-li-hover">
                    <NavLink to="/manageToken">Manage Token</NavLink>
                  </li>
                  <li className="custom-li-hover">
                    <NavLink onClick={(e) => {handleSignOut();}}>Log Out</NavLink>
                  </li>
                </ul>
              </li>
            ) : (
              <li>
                <NavLink to="/login">Log In / Sign Up</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
