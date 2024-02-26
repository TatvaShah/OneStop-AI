// HomePage.js
import React, { useEffect } from "react";
import "../Styles/HomePage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../Images/AI-Background.gif";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="hero">
        {" "}
        {/* Added className animate-left */}
        <h1 className="hero-title" style={{ fontSize: 77 }}>
          ONE STOP AI
        </h1>
        <img
          className="bg-image-home"
          height={"581px"}
          width={"739px"}
          src={backgroundImage}
          alt="bg"
        />
      </div>

  
    </>
  );
};

export default HomePage;
