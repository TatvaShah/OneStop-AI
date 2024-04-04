// Footer.js
import React from "react";
import "../Styles/Footer.css";
import OSILOGO from "../Images/OSI-Logo.png";
import logo from "../Images/OSI-WHITE-LOGO.png";
import socialLogo1 from "../Images/1.png";
import socialLogo2 from "../Images/2.png";
import socialLogo3 from "../Images/3.png";
import socialLogo4 from "../Images/4.png";
import socialLogo5 from "../Images/5.png";
import socialLogo6 from "../Images/6.png";

const Footer = () => {
  return (
    <footer class="footer-section">
      <div class="container">
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="">
                    <div className="d-flex">
                      <img
                        src={logo}
                        width={35}
                        height={38}
                        class=""
                        alt="logo"
                      />
                      <img
                        src={OSILOGO}
                        width={55}
                        height={25}
                        class="mx-3  mt-1"
                        alt="logo"
                      />
                    </div>
                  </a>
                </div>
                <div class="footer-text">
                  <p>Don't miss out, Stay updated</p>
                </div>
                <div class="footer-text-2">
                  <p>Don’t hesitate to subscribe to latest news about ICo</p>
                </div>

                <div class="subscribe-form">
                  <form action="#">
                    <input
                      type="text"
                      style={{ borderRadius: 30 }}
                      placeholder="Email Address"
                    />
                    <button
                      className="subcribe-btn"
                      style={{ borderRadius: 30, width: 120 }}
                    >
                      <span style={{ fontSize: 12 }}>SUBSCRIBE</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50"></div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <span>
                    Don’t hesitate to subscribe to latest news about ICo markets
                    as well as crucial financial knowledge to become successful
                    investors globally
                  </span>
                </div>

                <div className="d-flex justify-content-start align-items-start w-100 gap-2">
                  <img
                    className="mt-3"
                    src={socialLogo1}
                    width={25}
                    alt="logo"
                  />
                  <img
                    className="mt-3"
                    src={socialLogo2}
                    width={25}
                    alt="logo"
                  />
                  <img
                    className="mt-3"
                    src={socialLogo3}
                    width={25}
                    alt="logo"
                  />
                  <img
                    className="mt-3"
                    src={socialLogo4}
                    width={25}
                    alt="logo"
                  />
                  <img
                    className="mt-3"
                    src={socialLogo5}
                    width={25}
                    alt="logo"
                  />
                  <img
                    className="mt-3"
                    src={socialLogo6}
                    width={25}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>© 2024. All rights reserved by OneStopAi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
