import React from "react";
import Footer from "../../Components/Footer/Footer";
import FrontImage from "../../Components/FrontImage/FrontImage";
// import Navbar from "../../Components/Navbar/Navbar";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import "./ReturnsPolicy.css";

const ReturnsPolicy = () => {
  const iconURL = "./images/front-image-icon.png";
  const heading = "Returns and Alterations Policy";
  return (
    <div className="returns-policy">
      <Navbar2 />
      <FrontImage iconURL={iconURL} heading={heading} />
      <h1 className="returns-policy-heading">Returns Alterations Policy</h1>
      <div className="returns-policy-body">
        <h3>Alterations {"&"} Repair</h3>
        <p>
          Alterations are a big problem in today's life especially in urban
          cities. But don't worry here we are providing alteration services also
          that will be done through experts not like roadside tailors.
        </p>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <hr />
        <h3>Returns</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <hr />
      </div>

      <div className="get-in-touch">
        <h1 className="returns-policy-heading">Get in touch with us</h1>
        <div className="get-in-touch-container">
          <div className="get-in-touch-body">
            <div className="map">
              <div className="details">
                <img
                  src="./images/returns-policy/LOGO.png"
                  alt="logo"
                  width="88px"
                  height="25px"
                  className="logo"
                />
                <div className="arrow">
                  <img
                    src="./images/returns-policy/akar-icons_arrow.png"
                    alt="arrow"
                    width="20px"
                    height="20px"
                  />
                  <a href="/returns-policy">Direction</a>
                </div>
                <p>
                  Sunt aute sit aliqua ex dolore esse qui tempor velit ea
                  cshsbdcudsbcsd.
                </p>
                <span className="ratings">
                  4.2
                  <span
                    class="fa fa-star checked"
                    style={{ marginLeft: "10px" }}
                  ></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <a href="/returns-policy" style={{ marginLeft: "50px" }}>
                    13 Reviews
                  </a>
                </span>

                <a href="/returns-policy" style={{ marginLeft: "15px" }}>
                  View larger map
                </a>
              </div>
            </div>
            <form>
              <div className="form">
                <label className="contactUs-labels" htmlFor="name">
                  Name:
                </label>
                <input
                  className="contactUs-inputs"
                  type="text"
                  id="name"
                  placeholder="enter your name here"
                />
                <label className="contactUs-labels" htmlFor="email">
                  Email:
                </label>
                <input
                  className="contactUs-inputs"
                  type="email"
                  id="email"
                  placeholder="myname@gmail.com"
                />
                <label className="contactUs-labels" htmlFor="phoneNumber">
                  Phone No:
                </label>
                <input
                  className="contactUs-inputs"
                  type="number"
                  id="phoneNumber"
                  placeholder="+91"
                />
                <label className="contactUs-labels" htmlFor="message">
                  Message:
                </label>
                <textarea
                  type="text"
                  className="contactUs-inputs contactUs-input-textarea"
                  id="message"
                  placeholder="mention your issue here"
                />
                <button>Submit</button>
              </div>
            </form>
          </div>
          <div className="get-in-touch-icons">
            <a href="/">
              <img
                src="./images/returns-policy/bxl_facebook-circle.png"
                alt="facebook"
              />
            </a>
            <a href="/">
              <img
                src="./images/returns-policy/bxl_pinterest.png"
                alt="pinterest"
              />
            </a>
            <a href="/">
              <img
                src="./images/returns-policy/logos_whatsapp.png"
                alt="whatsapp"
              />
            </a>
            <a href="/">
              <img
                src="./images/returns-policy/bxl_messenger.png"
                alt="messenger"
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReturnsPolicy;
