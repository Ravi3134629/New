import React from "react";
import "./PricingPolicy.css";
// import Navbar from "../../Components/Navbar/Navbar";
import FrontImage from "../../Components/FrontImage/FrontImage";
import Footer from "../../Components/Footer/Footer";
import Navbar2 from "../../Components/Navbar2/Navbar2";

const PricingPolicy = () => {
  const iconURL = "./images/front-image-icon.png";
  const heading = "Pricing Policy";
  return (
    <div className="pricing-policy">
      <Navbar2 />
      <FrontImage iconURL={iconURL} heading={heading} />
      <h1 className="pricing-policy-heading">Pricing Policy</h1>
      <div className="pricing-policy-body">
        <h3>Handling of Personal Data</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          in mattis netus neque et adipiscing. Neque eget porttitor sollicitudin
          consequat. Nec urna, amet suspendisse sed fames lacus, varius non.
        </p>
        <h3>What is personal data?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          in mattis netus neque et adipiscing. Neque eget porttitor sollicitudin
          consequat. Nec urna, amet suspendisse sed fames lacus, varius non.
        </p>
        <h3>Information and marketing</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          in mattis netus neque et adipiscing. Neque eget porttitor sollicitudin
          consequat. Nec urna, amet suspendisse sed fames lacus, varius non.
        </p>
        <h3>Cookies</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          in mattis netus neque et adipiscing. Neque eget porttitor sollicitudin
          consequat. Nec urna, amet suspendisse sed fames lacus, varius non.
        </p>
        <h3>Cookies for analysis and statistics</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          in mattis netus neque et adipiscing. Neque eget porttitor sollicitudin
          consequat. Nec urna, amet suspendisse sed fames lacus, varius non.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          in mattis netus neque et adipiscing. Neque eget porttitor sollicitudin
          consequat. Nec urna, amet suspendisse sed fames lacus, varius non.
        </p>
        <ul className="pricing-policy-list">
          <li>Nec urna, amet suspendisse sed fames lacus, varius non.</li>
          <li>Nec urna, amet suspendisse sed fames lacus, varius non.</li>
          <li>Nec urna, amet suspendisse sed fames lacus, varius non.</li>
          <li>Nec urna, amet suspendisse sed fames lacus, varius non.</li>
        </ul>
        <p>
          Condimentum in mattis netus neque adipiscing. Neque eget porttitor
          sollicitudin consequat. Nec urna, amet suspendisse sed fames lacus,
          varius non.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPolicy;
