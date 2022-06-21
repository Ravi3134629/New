import React, { useState } from "react";
import "./YourCart.css";

const YourCart = () => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(1199);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState("Apply");

  const handleMinus = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
    setPrice(price - 1199);
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
    setPrice(price + 1199);
  };

  const handleCouponClick = () => {
    setCouponApplied("Applied!");
    console.log(coupon);
  };

  return (
    <div className="your-cart">
      <h1>Add this amazing collection and get exciting offers !!</h1>

      <div className="cart">
        <div className="cart-img">
          <img src="./images/blouse/step1/image1.png" alt="" />
        </div>
        <div className="cart-details">
          <h5>Product Name</h5>
          <h5>&#x20b9; {price}</h5>
          <h5>Deliver by 23 may</h5>
          <div className="counter">
            <button className="btn-1" onClick={handleMinus}>
              -
            </button>
            <span>Quantity {quantity}</span>
            <button className="btn-2" onClick={handlePlus}>
              +
            </button>
          </div>
        </div>
      </div>

      <div className="cart-addon">
        {/* <div className="addon-badge">Add Ons</div> */}

        <div className="cart-img">
          <img src="./images/blouse/step1/image1.png" alt="" />
        </div>
        <div className="cart-details">
          <h5>Product Name</h5>
          <h5>&#x20b9; 200.00</h5>
          <h5>In Stock</h5>
          <h5>Design for &#x20b9; 200.00</h5>
        </div>
      </div>

      <div className="cart-coupons">
        <div className="have-a-coupon-1">
          <i className="fa-solid fa-percent"></i>
          <input
            type="text"
            placeholder="Have a Coupon Code?"
            onChange={(e) => {
              setCoupon(e.target.value);
            }}
          />
          <button
            type="submit"
            className="coupon-btn"
            onClick={handleCouponClick}
          >
            {couponApplied}
          </button>
        </div>
        <div className="have-a-coupon-2">
          <input type="checkbox" name="qualityCheck" id="quality" />
          <label htmlFor="quality">Quality Check</label>
        </div>
      </div>
    </div>
  );
};

export default YourCart;
