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
import LoginSignUp from "./Authentication/LoginSignUp";
import TextToImage from "./Components/TextToImage";
import SmartContract from "./Components/SmartContract";

import ScrollToTop from "./ScrollToTop";
const App = () => {
  const handleSignUpClick = () => {
    // Handle the Sign Up logic here
    // For simplicity, we'll just log a message
    console.log("Sign Up clicked");
  };

  return (
    <Router>
      <Header handleSignUpClick={handleSignUpClick} />
      <ScrollToTop />
      <div className="main-view">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/texttoimage" element={<TextToImage />} />
          <Route path="/smartcontract" element={<SmartContract />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/connect" element={<ConnectWithUsPage />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
