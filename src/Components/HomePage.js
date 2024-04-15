// HomePage.js
import React from "react";
import "../Styles/HomePage.css";
import handsImg from "../Images/hands.png";
import homePageImg2 from "../Images/Home-Page-Img-2.png";
import LearnMoreButton from "../Images/Learn-More-Button.png";
import Icon from "../Images/icon.png";
import TextLogo from "../Images/Text-Logo.png";
import BrandLogo from "../Images/brandLogo.png";
import BrandLogo2 from "../Images/brandLogo2.png";
const HomePage = () => {
  return (
    <div className="home-bg">
      <div className="d-flex justify-content-center w-100 align-items-center flex-column">
        <img className="mt-5" src={TextLogo} width={350} alt="logo" />
        <span className="home-title-2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
        </span>
      </div>
      <div className="d-flex justify-content-end w-100 align-items-end">
        <img src={handsImg} height={500} alt="handsImg" />
      </div>
      <div className="d-flex justify-content-center w-100 align-items-center">
        <img src={homePageImg2} height={500} alt="handsImg" />
      </div>

      <div
        className="d-flex justify-content-center w-100 align-items-center flex-column"
        style={{ marginTop: 120 }}
      >
        <span className="subTitle-2">One Product,</span>
        <span className="subTitle-2 mt-0 pt-0">
          Endless Business Opportunities
        </span>

        <span className="subTitle-3" style={{ marginTop: 20 }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
        </span>

        <div className="d-flex mt-4">
          <button className="home-btn">
            <span>Log In</span>
          </button>
          <img
            style={{ marginLeft: 50 }}
            src={LearnMoreButton}
            alt="LearnMoreButton"
          />
        </div>
      </div>

      <div className="home-feature mt-4 d-flex justify-content-center w-100 flex-column mt-0 pt-0">
        <div class="home-main">
          <ul class="home-feature-cards">
            <li class="home-feature-cards_item">
              <div class="home-feature-card">
                <div class="home-feature-card_content">
                  <h2 class="home-feature-card_title text-center">
                    <img src={Icon} alt="icon" />
                  </h2>
                  <p class="home-feature-card_text mt-3 text-cesnter">
                    Lorem ipsum Lorem ipsum
                  </p>
                </div>
              </div>
            </li>
            <li class="home-feature-cards_item">
              <div class="home-feature-card">
                <div class="home-feature-card_content">
                  <h2 class="home-feature-card_title text-center">
                    <img src={Icon} alt="icon" />
                  </h2>
                  <p class="home-feature-card_text mt-3 text-cesnter">
                    Lorem ipsum Lorem ipsum
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="home-main">
          <ul class="home-feature-cards">
            <li class="home-feature-cards_item">
              <div class="home-feature-card">
                <div class="home-feature-card_content">
                  <h2 class="home-feature-card_title text-center">
                    <img src={Icon} alt="icon" />
                  </h2>
                  <p class="home-feature-card_text mt-3 text-cesnter">
                    Lorem ipsum Lorem ipsum
                  </p>
                </div>
              </div>
            </li>
            <li class="home-feature-cards_item">
              <div class="home-feature-card">
                <div class="home-feature-card_content">
                  <h2 class="home-feature-card_title text-center">
                    <img src={Icon} alt="icon" />
                  </h2>
                  <p class="home-feature-card_text mt-3 text-cesnter">
                    Lorem ipsum Lorem ipsum
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="d-flex justify-content-center w-100 align-items-center flex-column">
        <img className="mt-5" src={TextLogo} width={350} alt="logo" />
        <span className="home-title-2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
        </span>
      </div>

      <div className="d-flex justify-content-center align-items-center w-100 gap-5">
        <img className="" src={BrandLogo} width={155} alt="logo" />
        <img className="" src={BrandLogo2} width={155} alt="logo" />
        <img className="" src={BrandLogo} width={155} alt="logo" />
        <img className="" src={BrandLogo2} width={155} alt="logo" />
        <img className="" src={BrandLogo} width={155} alt="logo" />
      </div>
      <div className="d-flex justify-content-center align-items-center w-100 gap-5">
        <img className="mt-3" src={BrandLogo} width={155} alt="logo" />
        <img className="mt-3" src={BrandLogo2} width={155} alt="logo" />
        <img className="mt-3" src={BrandLogo} width={155} alt="logo" />
        <img className="mt-3" src={BrandLogo2} width={155} alt="logo" />
        <img className="mt-3" src={BrandLogo} width={155} alt="logo" />
      </div>
    </div>
  );
};

export default HomePage;
