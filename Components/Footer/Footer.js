import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section1">
        <div className="col-container">
          <div className="col1">
            <a href="/">
              <img
                src="./images/landing-page/footer-logo-white.png"
                alt="silaan-logo"
              />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              egestas facilisis ut bibendum
            </p>
            <ul className="links-list">
              <li className="links-list-item">
                <a href="/">
                  <i className="fa-brands fa-xl fa-facebook"></i>
                </a>
              </li>
              <li className="links-list-item">
                <a href="/">
                  <i className="fa-regular fa-xl fa-envelope"></i>
                </a>
              </li>
              <li className="links-list-item">
                <a href="/">
                  <i className="fa-brands fa-xl fa-instagram"></i>
                </a>
              </li>
              <li className="links-list-item">
                <a href="/">
                  <i className="fa-brands fa-xl fa-whatsapp"></i>
                </a>
              </li>
              <li className="links-list-item">
                <a href="/">
                  <i className="fa-brands fa-xl fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col2">
            <p>Our Products</p>
            <div className="line" />
            <ul className="footer-links-list">
              <li>
                <a href="/">Blouse</a>
              </li>
              <li>
                <a href="/">Salwar</a>
              </li>
              <li>
                <a href="/">Gown</a>
              </li>
              <li>
                <a href="/">Lehenga</a>
              </li>
              <li>
                <a href="/">Saree/Duppatta</a>
              </li>
              <li>
                <a href="/">Designed</a>
              </li>
              <li>
                <a href="/">Kids</a>
              </li>
            </ul>
          </div>
          <div className="col3">
            <p>Useful Links</p>
            <div className="line" />
            <ul className="footer-links-list">
              <li>
                <a href="/fit-guarantee">Silaan Fit Guarantee</a>
              </li>
              <li>
                <a href="/fabric-samples">Order Fabric Samples</a>
              </li>
              <li>
                <a href="/track-order">Track Order</a>
              </li>
              <li>
                <a href="/returns-policy">Returns & Alternations Policy</a>
              </li>
              <li>
                <a href="/pricing-policy">Pricing Policy</a>
              </li>
              <li>
                <a href="/terms-conditions">Terms {"&"} Conditions</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/shipping-policy">Shipping {"&"} Delivery Policy</a>
              </li>
              <li>
                <a href="/faq">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="col4">
            <div className="col4-1">
              <p>Our Office</p>
              <div className="line" />
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tristique faucibus nibh.
              </p>
            </div>
            <div className="col4-2">
              <p>Call Us</p>
              <div className="line" />
              <div className="callUs-container">
                <p>
                  +11 (234) 56987
                  <br />
                  +11 (234) 56789
                </p>
                <p>
                  Mon - Fri
                  <br />
                  10:00 am - 8:00 pm
                </p>
              </div>
            </div>
            <div className="map-container">
              <img src="./images/landing-page/footer-map.png" alt="map" />
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="line" />
        <p>Copyright © 2003-2022 Silaan. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
