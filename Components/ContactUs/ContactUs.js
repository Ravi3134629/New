import React, { useState } from "react";
import TeleInput from "../TeleInput/TeleInput";
import "./ContactUs.css";

const ContactUs = () => {
  const initialFormFields = {
    name: "",
    email: "",
    phone: "",
    concern: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialFormFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <div className="contactUs">
      <div className="heading-container">
        <h1>Contact Us</h1>
        <p>We are currently running our beta program</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="contactUs-body">
          <div className="contactUs-body-container">
            <label className="contactUs-labels" htmlFor="name">
              Please tell us your name
            </label>
            <input
              type="text"
              className="contactUs-inputs"
              id="name"
              name="name"
              placeholder="Enter your name here"
              onChange={handleChange}
              value={formValues.name}
              required
            />
            <label className="contactUs-labels" htmlFor="phoneNumber">
              Enter your phone number
            </label>
            <TeleInput formValues={formValues} />
            <label
              className="contactUs-labels"
              htmlFor="email"
              style={{ marginTop: "25px" }}
            >
              Enter your Email ID
            </label>
            <input
              className="contactUs-inputs"
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              placeholder="myname@gmail.com"
              onChange={handleChange}
              required
            />
            <label className="contactUs-labels" htmlFor="concern">
              What are your concerns about?
            </label>
            <select
              className="contactUs-inputs select"
              id="concern"
              name="concern"
              onChange={handleChange}
              value={formValues.concern}
              required
            >
              <option value="1" className="options">
                Lorem Ipsum1
              </option>
              <option value="2" className="options">
                Lorem Ipsum2
              </option>
              <option value="3" className="options">
                Lorem Ipsum3
              </option>
              <option value="4" className="options">
                Lorem Ipsum4
              </option>
            </select>
            <label className="contactUs-labels" htmlFor="message">
              Please tell us your message
            </label>
            <input
              type="text"
              className="contactUs-inputs"
              id="message"
              name="message"
              placeholder="Type your message here"
              value={formValues.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
