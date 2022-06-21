import React from "react";
import Footer from "../../Components/Footer/Footer";
import FrontImage from "../../Components/FrontImage/FrontImage";
// import Navbar from "../../Components/Navbar/Navbar";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const iconURL = "./images/front-image-icon.png";
  const heading = "Privacy Policy";
  return (
    <div className="privacy-policy">
      <Navbar2 />
      <FrontImage iconURL={iconURL} heading={heading} />
      <h1 className="privacy-heading">Privacy Policy</h1>
      <p className="privacy-heading-para">
        This privacy policy sets out how Knot Standard Limited ("COMPANY") uses
        and protects any information that you give COMPANY when you use this
        website. COMPANY is committed to ensuring that your privacy is
        protected. Should we ask you to provide certain information by which you
        can be identified when using this website www.knotstandard.com, then you
        can be assured that it will only be used in accordance with this privacy
        statement.
      </p>
      <div className="privacy-policy-body">
        <h3>What we collect</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
          <ul style={{ marginTop: "20px", paddingLeft: "20px" }}>
            <li>Name address and phone number</li>
            <li>Name and address of a recipient</li>
            <li>Contact information including email address</li>
          </ul>
        </p>
        <h3>Security</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.{" "}
          <ul style={{ marginTop: "20px", paddingLeft: "20px" }}>
            <li>Nec urna, amet suspendisse sed fames lacus, varius non.</li>
            <li>Nec urna, amet suspendisse sed fames lacus, varius non.</li>
            <li>Nec urna, amet suspendisse sed fames lacus, varius non.</li>
          </ul>
        </p>
        <h3>Internal record keeping</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          in mattis netus neque et adipiscing. Neque eget porttitor sollicitudin
          consequat. Nec urna, amet suspendisse sed fames lacus, varius non.
        </p>
        <h3>Links to other websites</h3>
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
        <p style={{ marginBottom: "200px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          in mattis netus neque et adipiscing. Neque eget porttitor sollicitudin
          consequat. Nec urna, amet suspendisse sed fames lacus, varius non.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
