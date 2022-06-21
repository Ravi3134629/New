import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-us-page">
      <Navbar2 />
      <div className="contact-us-container">
        <h1 className="contact-heading">Contact Us</h1>
        <hr className="contact-hr" />
        <div className="question">
          <span>Got a Question?</span>
          <p>
            We are here to help and answer any question you might have. We look
            forward to hearing from you!
          </p>
        </div>

        <div className="contact-form-container">
          <div className="contact-form-left">
            <form>
              <div className="form-container">
                <label htmlFor="name">Please tell us your name</label>
                <input
                  type="text"
                  placeholder="enter your name here"
                  id="name"
                />
                <label htmlFor="number">Enter your phone number</label>
                <input type="number" placeholder="+91 |" id="number" />
                <label htmlFor="email">Enter your email id</label>
                <input type="email" placeholder="myname@gmail.com" />
                <label htmlFor="concern">What are your concerns about?</label>
                <select id="concern" name="concern">
                  <option value="0" disabled selected>
                    Please select an option
                  </option>
                  <option value="1">Lorem Ipsum1</option>
                  <option value="2">Lorem Ipsum2</option>
                  <option value="3">Lorem Ipsum3</option>
                  <option value="4">Lorem Ipsum4</option>
                </select>
                <label htmlFor="message">Please tell us your message</label>
                <input
                  type="text"
                  id="message"
                  placeholder="Type your message here"
                />
                <div className="btn-containers">
                  <button>SUBMIT</button>
                  <button>SUBMIT Beta</button>
                </div>
              </div>
            </form>
          </div>
          <div className="contact-form-right">
            <h3>We're here</h3>
            <h4>Our Office</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tristique faucibus nibh.
            </p>
            <h4>Call Us</h4>
            <div className="callus-para">
              <p>
                +11 (234) 56987
                <br />
                +11 (234) 56789
              </p>
              <p style={{ textAlign: "center" }}>
                Mon - Fri
                <br />
                10:00 am - 8:00 pm
              </p>
            </div>
            <h4>Mail Us</h4>
            <p>info@silaan.com</p>
            <div className="contact-us-social-icons">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-xl fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-regular fa-xl fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-xl fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-xl fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-xl fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-us-map" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
