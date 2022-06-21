import React from "react";
import "./ChooseSalwarStep5.css";
// import { data1, data2, data3, data4 } from "../data";

const ChooseSalwarStep5 = ({ setSalwarChoices, SalwarChoices }) => {
  const url = "./images/salwar/step5/";
  return (
    <>
      <h1>We hope you loved the design !!</h1>
      <div className="salwar-step5">
        <div className="collections">
          <div className="collections-img">
            <img src="./images/salwar/step1/image1.png" alt="" />
            <p>
              Yaa!!
              <br />
              Styling is ready to wear
            </p>
          </div>
          <div className="collections-details">
            <h5>Front Neck [ V Neck ]</h5>
            <h5>Front Neck [ V Neck ]</h5>
            <h5>Front Neck [ V Neck ]</h5>
            <h5>Front Neck [ V Neck ]</h5>
            <hr />
            <div className="collections-price">
              <span>Total</span>
              <span>&#x20b9; 1199</span>
            </div>
          </div>
        </div>
        <div className="collections-choices">
          <input
            type="radio"
            name="design"
            id="1"
            className="design-radio-btn"
            // onClick={handleClick}
          />
          <label htmlFor="1" className="design-radio-label">
            <div className="design-radio-content">
              <img
                src={url + "image1.png"}
                className="design-radio-content-img"
                alt="img"
              />
              <div className="design-radio-content-title">Design for ₹200</div>
            </div>
          </label>
          <input
            type="radio"
            name="design"
            id="2"
            className="design-radio-btn"
            // onClick={handleClick}
          />
          <label htmlFor="2" className="design-radio-label">
            <div className="design-radio-content">
              <img
                src={url + "image2.png"}
                className="design-radio-content-img"
                alt="img"
              />
              <div className="design-radio-content-title">Design for ₹500</div>
            </div>
          </label>
          <input
            type="radio"
            name="design"
            id="3"
            className="design-radio-btn"
            // onClick={handleClick}
          />
          <label htmlFor="3" className="design-radio-label">
            <div className="design-radio-content">
              <img
                src={url + "image3.png"}
                className="design-radio-content-img"
                alt="img"
              />
              <div className="design-radio-content-title">Design for ₹1000</div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default ChooseSalwarStep5;
