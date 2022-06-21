import React from "react";
// import { useWindowWidth } from "../../Hooks/useWindowWidth";
import "./FrontImage.css";

const FrontImage = ({ iconURL, heading }) => {
  // const isMobile = useWindowWidth();

  const url = "./images/ep_arrow-right.png";
  return (
    <div className="frontImage">
      {heading && iconURL ? (
        <div className="text-container-1">
          <div className="content">
            <img src={iconURL} alt={iconURL} />
            <img src={url} alt="arrow" />
            <h1>{heading}</h1>
          </div>
        </div>
      ) : (
        <div className="text-container-2">
          <h2>Hail a Tailor</h2>
          <h3>Tech Enabled Custom Tailoring.</h3>
        </div>
      )}
    </div>
  );
};

export default FrontImage;
