// Header.js
import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import "../Styles/Header.css"; // Import the CSS file

const Header = ({ handleSignUpClick }) => {
  // const [showModal, setShowModal] = useState(false);

  // const handleLoginClick = () => {
  //   setShowModal(true);
  // };

  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="header-container">
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
        <div className="menu-icon" onClick={handleShowNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="24"
            viewBox="0 0 52 24"
          >
            <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
              <rect
                id="Rectangle_3"
                data-name="Rectangle 3"
                width="42"
                height="4"
                rx="2"
                transform="translate(304 47)"
                fill="#574c4c"
              ></rect>
              <rect
                id="Rectangle_5"
                data-name="Rectangle 5"
                width="42"
                height="4"
                rx="2"
                transform="translate(304 67)"
                fill="#574c4c"
              ></rect>
              <rect
                id="Rectangle_4"
                data-name="Rectangle 4"
                width="52"
                height="4"
                rx="2"
                transform="translate(294 57)"
                fill="#574c4c"
              ></rect>
            </g>
          </svg>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">Connect With Us</NavLink>
            </li>
            <li>
              <NavLink to="/login">Log In / Sign Up</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
