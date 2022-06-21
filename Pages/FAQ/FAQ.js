import React from "react";
import Footer from "../../Components/Footer/Footer";
import FrontImage from "../../Components/FrontImage/FrontImage";
// import Navbar from "../../Components/Navbar/Navbar";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import "./FAQ.css";

const FAQ = () => {
  const iconURL = "./images/front-image-icon.png";
  const heading = "FAQ's";
  return (
    <div className="faq">
      <Navbar2 />
      <FrontImage iconURL={iconURL} heading={heading} />
      <h1 className="faq-heading">FAQ's </h1>
      <p className="faq-para">
        Below you find answers to the mst ferquently asked questions. You can
        browse through the category or search for a relevant keywords.
      </p>
      <div className="faq-body">
        <h3>Shipping and delivery</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
          <ul className="faq-list">
            <li>SILAAN CHECKING</li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
              uries, but also the leap ?
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
              uries, but also the leap ?
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
              uries, but also the leap ?
            </li>
          </ul>
        </p>
        <h3>How about the measurement?</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
          <ul className="faq-list">
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
              uries, but also the leap ?
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
              uries, but also the leap ?
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
              uries, but also the leap ?
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
              uries, but also the leap ?
            </li>
          </ul>
        </p>
        <h3>Payment questions</h3>
        <p style={{ marginBottom: "100px" }}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
          <ul className="faq-list">
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
              uries, but also the leap ?
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
              uries, but also the leap ?
            </li>
          </ul>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
