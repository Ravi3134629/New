import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";

const Navbar2 = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.screen.width <= 426) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isMobile ? "navbar-dark" : "navbar-light"
      }`}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {!isMobile && (
        <a className="navbar-brand" href="/">
          <img
            src="./images/landing-page/LOGO.png"
            alt="silaan-logo"
            height="45px"
            width="170px"
          />
        </a>
      )}
      {isMobile && (
        <a className="navbar-brand" href="/">
          <img
            src="./images/landing-page/LOGO-mobile.png"
            alt="silaan-logo"
            height="25px"
            width="75px"
          />
        </a>
      )}

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item mr-5 dropdown  text-dark">
            <a
              className="nav-link dropdown-toggle text-dark"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Collections
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item text-dark" href="/choose-blouse">
                Blouse
              </a>
              <a className="dropdown-item text-dark" href="/">
                Salwar
              </a>

              <a className="dropdown-item text-dark" href="/">
                Gown
              </a>
              <a className="dropdown-item text-dark" href="/">
                Lehenga/Crop Top
              </a>
              <a className="dropdown-item text-dark" href="/">
                Saree/Dupatta
              </a>
              <div className="dropdown-divider"></div>
              <p className="ml-4 mt-3 mb-2 text-dark">Kids</p>
              <a className="dropdown-item text-dark" href="/">
                Baby Boy
              </a>
              <a className="dropdown-item text-dark" href="/">
                Baby Girl
              </a>
              <div className="dropdown-divider"></div>
              <p className="ml-4 mt-3 mb-2 text-dark">Designed</p>
              <a className="dropdown-item text-dark" href="/">
                Casual
              </a>
              <a className="dropdown-item text-dark" href="/">
                Special
              </a>
            </div>
          </li>
          <li className="nav-item mr-5">
            <a className="nav-link text-dark" href="/about-us">
              About Us
            </a>
          </li>
          <li className="nav-item mr-5">
            <a className="nav-link text-dark" href="/">
              How It Works
            </a>
          </li>
          <li className="nav-item mr-5">
            <Link className="nav-link text-dark" to="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>

        {/* for register modal1 */}
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg wid_mod">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="exampleModalToggleLabel">
                  Modal 1
                </h5> */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <h4>New Registration</h4>

                <div className="inp">
                  <div className="first">
                    <select
                      className="form-select form-select-sm country_num"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>+91</option>
                      <option value="1">+123</option>
                      <option value="2">+235</option>
                      <option value="3">+154</option>
                    </select>
                  </div>

                  <div className="second">
                    <input type="text" placeholder="Enter Mobile Number..." />
                  </div>
                </div>
                <br />
                <button
                  className="btn btn-primary"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Get Otp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* modal2 for login otp */}
        <div
          className="modal fade"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabindex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg wid_mod">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {/*  */}
              <div className="modal-body">
                <h4>New Registration</h4>
                {/* <input type="text" placeholder="Enter your Number..." /> */}
                <div className="inp">
                  <div className="first"></div>

                  <div className="second">
                    <input type="text" placeholder="Enter OTP..." />
                  </div>
                </div>

                <br />
                <div className="tick_content">
                  <span className="span1">Didn't recieve code?</span>
                  <span className="span2">Resend in 1:30</span>
                </div>
                <button
                  className="btn btn-primary"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Login
                </button>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        <a
          className="btn_setup btn_reg_color2"
          data-bs-toggle="modal"
          href="#exampleModalToggle"
          role="button"
        >
          Register
        </a>

        {/*  */}
        {/* <button
          type="button"
          className="btn btn-primary btn_reg_color"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Register
        </button>

        <div
          className="modal fade "
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg wid_mod">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h4>New Registration</h4>

                <div className="inp">
                  <div className="first">
                    <select
                      className="form-select form-select-sm country_num"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>+91</option>
                      <option value="1">+123</option>
                      <option value="2">+235</option>
                      <option value="3">+154</option>
                    </select>
                  </div>

                  <div className="second">
                    <input type="text" placeholder="Enter Mobile Number..." />
                  </div>
                </div>
                <br />
                <button type="button" className="btn btn-primary">
                  Get Otp
                </button>
              </div>
            </div> 
          </div>
        </div>*/}
      </div>
    </nav>
  );
};

export default Navbar2;
