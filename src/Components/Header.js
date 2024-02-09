// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css'; // Import the CSS file

const Header = ({ handleSignUpClick }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  return (
    <header className="header">
      <div className="logo">One Stop AI</div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/products" className="nav-link">Products</Link></li>
          <li><Link to="/connect" className="nav-link">Connect With Us</Link></li>
          <li><button onClick={handleSignUpClick} className="signup-btn">Sign Up</button></li>
          <li><button onClick={handleLoginClick} className="login-btn">Log In</button></li>
        </ul>
      </nav>
      {showModal && (
        <div className="modal">
          <button onClick={() => setShowModal(false)} className="close-btn">Close Modal</button>
          <form className="login-form">
            <label>Email:</label>
            <input type="email" className="input-field" />
            <label>Password:</label>
            <input type="password" className="input-field" />
            <button type="submit" className="login-submit-btn">Log In</button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
