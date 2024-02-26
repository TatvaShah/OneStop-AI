// ProductsPage.js
import React from 'react';
import ProductCard from './ProductCard';
import { useNavigate } from "react-router-dom";

import ProductImage1 from "../Images/Smart-content-creation-Image.png";
import ProductImage2 from "../Images/Text-To-Image.png";
import "../Styles/HomePage.css"

const ProductsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <h1>Our Products</h1> */}
      <div className="product-list">
        <div className="product-home-div">
          <div className="product-home-section">
            <img
              src={ProductImage1}
              className=" product-img img-fluid"
              alt="coffeeMachine"
            />{" "}
            <div
              style={{
                borderRadius: 25,
                boxShadow: "0px 10px 42px 22px rgba(0,0,0,0.1)",
                padding: 20,
                fontFamily: "monospace",
                background: "#1b4242",
                color: "#9EC8B9",
                marginRight: 40,
              }}
              className=""
            >
              <h1
                className=""
                style={{ color: "#ff6a00", textAlign: "center" }}
              >
                Smart Contract Creation
              </h1>

              <h5
                className=""
                style={{ fontSize: 20, marginTop: 60, fontFamily: "monospace" }}
              >
                The complete solution to create affordable and professional
                marketing content
              </h5>
              <h5
                className=""
                style={{ fontSize: 20, marginTop: 30, fontFamily: "monospace" }}
              >
                {" "}
                In no time, turn your design into corporate identity-proof
                social content, imagery, job postings or brochures, whatever you
                need. Organize your image collection and manage your corporate
                identity. Stay consistently visible to your target audience so
                your brand grows and you attract the right customers.
              </h5>
              <div style={{ textAlign: "center", marginTop: 50 }}>
                <button
                  onClick={() => navigate("/product/smart-contract")}
                  className="learn-btn learn-more"
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="product-home-div">
          <div className="product-home-section">
            <div
              style={{
                borderRadius: 25,
                boxShadow: "0px 10px 42px 22px rgba(0,0,0,0.1)",
                padding: 20,
                fontFamily: "monospace",
                background: "#1b4242",
                color: "#9EC8B9",
                marginLeft: 40,
              }}
              className=""
            >
              <h1
                className=""
                style={{ color: "#ff6a00", textAlign: "center" }}
              >
                Text To Image Generator
              </h1>

              <h5
                className=""
                style={{ fontSize: 20, marginTop: 60, fontFamily: "monospace" }}
              >
                This text to image generator uses AI to understand your words
                and convert them to a unique image each time.
              </h5>
              <h5
                className=""
                style={{ fontSize: 20, marginTop: 30, fontFamily: "monospace" }}
              >
                {" "}
                Generate an image using Generative AI by describing what you
                want to see, all images are published publicly by default.
              </h5>
              <div style={{ textAlign: "center", marginTop: 50 }}>
                <button
                  onClick={() => navigate("/product/text-to-images")}
                  className="learn-btn learn-more"
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Learn More</span>
                </button>
              </div>
            </div>
            <img
              src={ProductImage2}
              className="product-img img-fluid"
              alt="ProductImage2"
              style={{ marginRight: 40 }}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
