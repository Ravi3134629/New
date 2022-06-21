import React from "react";
import Footer from "../../Components/Footer/Footer";
import FrontImage from "../../Components/FrontImage/FrontImage";
// import Navbar from "../../Components/Navbar/Navbar";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import "./FabricSamples.css";

const FabricSamples = () => {
  const iconURL = "./images/front-image-icon.png";
  const heading = "Order Frabric Samples";
  return (
    <div className="fit-guarantee">
      <Navbar2 />
      <FrontImage iconURL={iconURL} heading={heading} />
      <h1 className="fabric-heading">Order Fabric Samples</h1>
      <p className="fabric-para">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged.
        <ul className="fabric-list">
          <li>
            Lorem Ipsum has been the industry's standard dummy text ever uries,
            but also the leap ?
          </li>
          <li>
            Lorem Ipsum has been the industry's standard dummy text ever uries,
            but also the leap ?
          </li>
          <li>
            Lorem Ipsum has been the industry's standard dummy text ever uries,
            but also the leap ?
          </li>
          <li>
            Lorem Ipsum has been the industry's standard dummy text ever uries,
            but also the leap ?
          </li>
        </ul>
      </p>
      <div className="fabric-body">
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
          unchanged.
          <ul className="fabric-list">
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
        <h3>Lorem Ipsum</h3>
        <p style={{ marginBottom: "100px" }}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
          <ul className="fabric-list">
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

export default FabricSamples;
