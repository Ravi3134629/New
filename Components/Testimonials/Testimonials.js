import React from "react";

import "./Testimonials.css";

const Testimonials = ({ isEven }) => {
  return (
    <div className="testimonials">
      <div className="apostrophe" />
      <div
        className="body"
        style={{ backgroundColor: isEven ? "#ECA0A4" : "#89c3cf" }}
      >
        <p className="testimonial-desc">
          Nostrud dolore sit ullamco velit voluptate eiusmod excepteur quis ad
          dolor. Sunt amet tempor irure deserunt elit cillum veniam.
        </p>
        <div
          className="testimonial-footer"
          style={{ backgroundColor: isEven ? "#ECA0A4" : "#89c3cf" }}
        >
          <img src="./images/landing-page/unsplash_T-PUQaJ8YEw.png" alt="" />
          <p>
            Drisha Roy
            <br />
            Kolkata, India
          </p>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
