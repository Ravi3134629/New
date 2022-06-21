import React from "react";
import Footer from "../../Components/Footer/Footer";
import FrontImage from "../../Components/FrontImage/FrontImage";
// import Navbar from "../../Components/Navbar/Navbar";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import "./FitGuarantee.css";

const FitGuarantee = () => {
  const iconURL = "./images/front-image-icon.png";
  const heading = "Silaan Fit Guarantee";
  return (
    <div className="fit-guarantee">
      <Navbar2 />
      <FrontImage iconURL={iconURL} heading={heading} />
      <h1 className="silaan-fit-heading">Silaan Fit Guarantee</h1>
      <div className="fit-body">
        <h2>How does it work?</h2>
        <p>
          No hassle, no worries; just a Silaan fit. If your first
          custom-tailored garment doesn't quite fit how you want it to, contact
          our customer support, and they will help you with your measurements.
        </p>
        <div className="fit-body-rating">
          <div className="fit-body-rating-body">
            <RatingTestimonials />
            <RatingTestimonials />
            <RatingTestimonials />
          </div>
        </div>
        <h3>Lorem Ipsum</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <h3>Lorem Ipsum</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. <br />
          <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. <br /> <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. <br />
          <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. <br />
          <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. <br />
          <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. <br />
          <br />
        </p>
      </div>
      <Footer />
    </div>
  );
};

const RatingTestimonials = () => {
  return (
    <div className="rating-testimonial">
      <div className="ratings-col1">
        <img src="./images/fit-policy/Frame35.png" alt="img" />
      </div>
      <div className="ratings-col2">
        <p>“LorumIpsum kkh nnmmdbbf.”</p>
        <p>-Shreya Joshi</p>
        <p>
          <span
            class="fa fa-star checked"
            style={{ marginLeft: "10px" }}
          ></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        </p>
      </div>
    </div>
  );
};

export default FitGuarantee;
