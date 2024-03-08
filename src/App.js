// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ProductsPage from "./Components/ProductsPage";
import ConnectWithUsPage from "./Components/ConnectWithUsPage";
import ProductDetailPage from "./Components/ProductDetailPage";
import Login from "./Authentication/Login";
import TextToImage from "./Components/TextToImage";

import ScrollToTop from "./ScrollToTop";
import SignUp from "./Authentication/SignUp";
import OsiToken from "./Components/OsiToken";
const App = () => {
  const handleSignUpClick = () => {
    // Handle the Sign Up logic here
    // For simplicity, we'll just log a message
    console.log("Sign Up clicked");
  };

  return (
    <Router>
      <ScrollToTop />
      <Header handleSignUpClick={handleSignUpClick} />
      <div className="main-view">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/connect" element={<ConnectWithUsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ositoken" element={<OsiToken />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
