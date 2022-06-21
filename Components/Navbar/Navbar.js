import React from "react";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import "./Navbar.css";

const Navbar = () => {
  let width = useWindowWidth();
  const isMobile = width <= 375 ? true : false;
  const handleHamburgerClick = () => {
    let navbarResp = document.getElementsByClassName("responsive-navbar")[0];
    navbarResp.classList.add("display");
    // console.log(navbarResp.classList);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-list-container">
          <ul className="navbar-list">
            {isMobile && (
              <>
                <li className="navbar-list-item">
                  <button
                    style={{ border: "none", background: "none" }}
                    onClick={handleHamburgerClick}
                  >
                    <img
                      src="./images/landing-page/hamburger.png"
                      height="30px"
                      width="30px"
                      alt="hamburger"
                    />
                  </button>
                </li>
                <li className="navbar-list-item">
                  <a href="/" className="logo-link">
                    <div className="logo-container">
                      <img
                        src="./images/landing-page/LOGO-mobile.png"
                        alt="silaan-logo"
                        height="24px"
                        width="74px"
                      />
                    </div>
                  </a>
                </li>
              </>
            )}
            {!isMobile && (
              <>
                <li className="navbar-list-item">
                  <a href="/" className="logo-link">
                    <div className="logo-container">
                      <img
                        src="./images/landing-page/LOGO-whitebg.jpg"
                        alt="silaan-logo"
                      />
                    </div>
                  </a>
                </li>
                <li className="navbar-list-item">
                  <a href="/">
                    Collections <i className="fa-solid fa-angle-down"></i>
                  </a>
                </li>
                <li className="navbar-list-item">
                  <a href="/about-us">About Us</a>
                </li>
                <li className="navbar-list-item">
                  <a href="/">How It Works</a>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-button-container">
          <a href="/">
            <button>Register</button>
          </a>
        </div>
      </div>
      <div className="responsive-navbar">
        <ul className="navbar-list-responsive">
          <li className="navbar-list-item-responsive">
            <a href="/">
              Collections <i className="fa-solid fa-angle-down"></i>
            </a>
          </li>
          <li className="navbar-list-item-responsive">
            <a href="/about-us">About Us</a>
          </li>
          <li className="navbar-list-item-responsive">
            <a href="/">How It Works</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
