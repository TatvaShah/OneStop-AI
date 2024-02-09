// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ProductsPage from './Components/ProductsPage';
import ConnectWithUsPage from './Components/ConnectWithUsPage';
import ProductDetailPage from './Components/ProductDetailPage';
const App = () => {
  const handleSignUpClick = () => {
    // Handle the Sign Up logic here
    // For simplicity, we'll just log a message
    console.log('Sign Up clicked');
  };

  return (
    <Router>
      <Header handleSignUpClick={handleSignUpClick} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/connect" element={<ConnectWithUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
