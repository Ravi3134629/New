import React from "react";
import "./RectangleCards.css";

const RectangleCards = ({ imgURL }) => {
  let url = "./images/landing-page/" + imgURL;

  return (
    <div className="rectangle">
      <img src={url} className="img-container" alt="specialised-pic" />
      <h4>Customised Tailoring</h4>
      <p>
        Velit elit est reprehenderit tempor commodo aliquip. Ut mollit cupidatat
        consectetur veniam. Eiusmod ipsum tempor ullamco sint commodo mollit
        minim ipsum amet culpa fugiat.
      </p>
    </div>
  );
};

export default RectangleCards;
