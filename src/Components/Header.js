// Header.js
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Header.css"; // Import the CSS file
import useToken from "../hooks/useToken";

const Header = ({ handleSignUpClick }) => {
  const { token, userDetails } = useToken();

  const [showNavbar, setShowNavbar] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    if (token) {
      setShowNavbar(false);
    }
  }, [token]);

  return (
    // <nav className="navbar">
    //   <div className="header-container">
    // <div
    //   className="logo"
    //   style={{
    //     color: "#e3cd9f",
    //     textDecoration: "upperCase",
    //     fontSize: 25,
    //   }}
    // >
    //   One Stop AI
    // </div>
    //     <div className="menu-icon" onClick={handleShowNavbar}>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="52"
    //         height="24"
    //         viewBox="0 0 52 24"
    //       >
    //         <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
    //           <rect
    //             id="Rectangle_3"
    //             data-name="Rectangle 3"
    //             width="42"
    //             height="4"
    //             rx="2"
    //             transform="translate(304 47)"
    //             fill="#574c4c"
    //           ></rect>
    //           <rect
    //             id="Rectangle_5"
    //             data-name="Rectangle 5"
    //             width="42"
    //             height="4"
    //             rx="2"
    //             transform="translate(304 67)"
    //             fill="#574c4c"
    //           ></rect>
    //           <rect
    //             id="Rectangle_4"
    //             data-name="Rectangle 4"
    //             width="52"
    //             height="4"
    //             rx="2"
    //             transform="translate(294 57)"
    //             fill="#574c4c"
    //           ></rect>
    //         </g>
    //       </svg>
    //     </div>
    //     <div className={`nav-elements  ${showNavbar && "active"}`}>
    //       <ul>
    // <li>
    //   <NavLink to="/">Home</NavLink>
    // </li>
    // <li>
    //   <NavLink to="/about">About</NavLink>
    // </li>
    // <li>
    //   <NavLink to="/product">Products</NavLink>
    // </li>
    // <li>
    //   <NavLink to="/ositoken">OSI Token</NavLink>
    // </li>
    // {token ? (
    //   <li>
    //     <NavLink to="/profile">Profile</NavLink>
    //   </li>
    // ) : (
    //   <li>
    //     <NavLink to="/login">Log In / Sign Up</NavLink>
    //   </li>
    // )}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

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
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <span style={{ marginLeft: 5 }}>
                    {" "}
                    {userDetails?.firstName}
                  </span>
                </NavLink>

                <ul
                  onMouseLeave={() => setShowMenu(false)}
                  class="nav-dropdown"
                  style={{ display: showMenu ? "block" : "none" }}
                >
                  <li className="custom-li-hover">
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  <li className="custom-li-hover">
                    <NavLink to="/manageToken">Manage Token</NavLink>
                  </li>
                  <li className="custom-li-hover">
                    <NavLink to="/signOut">Sign Out</NavLink>
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
