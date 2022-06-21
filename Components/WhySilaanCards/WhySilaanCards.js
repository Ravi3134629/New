import React from "react";
import "./WhySilaanCards.css";

const WhySilaanCards = ({ imgURL, heading, desc }) => {
  let url = "./images/landing-page/" + imgURL;
  return (
    <div className="why-silaan-card">
      <img src={url} alt="why-silaan" />
      <h3>{heading}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default WhySilaanCards;
