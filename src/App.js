// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ProductsPage from "./Components/ProductsPage";
import ConnectWithUsPage from "./Components/ConnectWithUsPage";
import ProductDetailPage from "./Components/ProductDetailPage";
import Login from "./Authentication/Login";
import { ToastProvider } from "react-toast-notifications";
import ScrollToTop from "./ScrollToTop";
import SignUp from "./Authentication/SignUp";
import OsiToken from "./Components/OsiToken";
const App = () => {
  return (
    <ToastProvider
      autoDismiss
      autoDismissTimeout={5000}
      // components={{ Toast: Snack }}
      placement="bottom-center"
    >
      <Router>
        <ScrollToTop />
        <Header />
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
    </ToastProvider>
  );
};

export default App;
