import React from "react";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import FrontImage from "../../Components/FrontImage/FrontImage";
// import Navbar from "../../Components/Navbar/Navbar";
import RectangleCards from "../../Components/RectangleCards/RectangleCards";
import WhySilaanCards from "../../Components/WhySilaanCards/WhySilaanCards";
import Testimonials from "../../Components/Testimonials/Testimonials";

import "./Homepage.css";
import Navbar2 from "../../Components/Navbar2/Navbar2";
// import { useWindowWidth } from "../Hooks/useWindowWidth";

const Homepage = () => {
  const isEven = true;
  const isMobile = window.screen.width <= 376 ? true : false;

  const specialisedImgURL = [
    "yogendra-singh-awkmiCbnidc-unsplash.png",
    "unsplash_T-PUQaJ8YEw.png",
    "unsplash_bGdI5bd8fA4.png",
  ];
  const specialisedImgURLMobile = [
    "yogendra-singh-awkmiCbnidc-unsplash-mobile.png",
    "unsplash_T-PUQaJ8YEw-mobile.png",
    "unsplash_bGdI5bd8fA4-mobile.png",
  ];

  const whySilaan = [
    {
      imgName: "why-silaan-1.png",
      heading: "Quality Material",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum, nisl, sit ullamcorper purus urna.",
    },
    {
      imgName: "why-silaan-2.png",
      heading: "Professional Machine",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum, nisl, sit ullamcorper purus urna.",
    },
    {
      imgName: "why-silaan-3.png",
      heading: "Professional Machine",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum, nisl, sit ullamcorper purus urna. ",
    },
    {
      imgName: "why-silaan-4.png",
      heading: "Modern Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum, nisl, sit ullamcorper purus urna.",
    },
    {
      imgName: "why-silaan-5.png",
      heading: "Best in what we do",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum, nisl, sit ullamcorper purus urna. ",
    },
  ];

  return (
    <div className="homepage">
      {/* <Navbar /> */}
      <Navbar2 />
      <FrontImage />

      <section className="story-vision">
        <h1 className="heading">Our Story and Our Vision</h1>
        <div className="desc">
          <p>
            Nostrud ut deserunt deserunt elit adipisicing ipsum minim incididunt
            tempor sit elit ex nostrud. Ex magna non Lorem esse nostrud ad velit
            anim exercitation. Sunt dolor elit ea sint esse non.
            <button>Read More</button>
          </p>

          <div className="image-container" />
        </div>
      </section>
      {isMobile && <hr className="homepage-hr" />}
      <section className="specialised">
        <h1 className="heading">We are specialised</h1>
        <p>
          We provide you with a number of tailoring options to choose from,
          <br />
          making sure you get exactly what you want.
        </p>
        <div className="specialised-cards">
          <RectangleCards
            imgURL={
              isMobile ? specialisedImgURLMobile[0] : specialisedImgURL[0]
            }
          />
          <RectangleCards
            imgURL={
              isMobile ? specialisedImgURLMobile[1] : specialisedImgURL[1]
            }
          />
          <RectangleCards
            imgURL={
              isMobile ? specialisedImgURLMobile[2] : specialisedImgURL[2]
            }
          />
          <RectangleCards
            imgURL={
              isMobile ? specialisedImgURLMobile[1] : specialisedImgURL[1]
            }
          />
          <RectangleCards
            imgURL={
              isMobile ? specialisedImgURLMobile[1] : specialisedImgURL[1]
            }
          />
        </div>
      </section>

      <section className="why-silaan">
        <h1 className="heading">Why Silaan?</h1>
        <p>
          We provide you with a number of tailoring options to choose from,
          <br />
          making sure you get exactly what you want.
        </p>
        <div className="why-silaan-bg">
          <div className="why-silaan-cards">
            {whySilaan.map((item, index) => {
              return (
                <WhySilaanCards
                  key={index}
                  imgURL={item.imgName}
                  heading={item.heading}
                  desc={item.desc}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="unique">
        <h1 className="heading">We Are Unique</h1>
        <div className="unique-cards-container">
          <div className="unique-cards">
            <h2>5K</h2>
            <p>Orders Completed</p>
          </div>
          <div className="unique-cards">
            <h2>5K</h2>
            <p>Orders Completed</p>
          </div>
          <div className="unique-cards">
            <h2>50</h2>
            <p>Exclusive Designs</p>
          </div>
          <div className="unique-cards">
            <h2>29</h2>
            <p>Dedicated Workshops</p>
          </div>
          <div className="unique-cards">
            <h2>29</h2>
            <p>Dedicated Workshops</p>
          </div>
        </div>
      </section>

      <section className="trusted">
        <h1 className="heading">We are Well Trusted</h1>
        <div className="trusted-cards">
          <Testimonials />
          <Testimonials isEven={isEven} />
          <Testimonials />
        </div>
      </section>
      {isMobile && <hr className="homepage-hr" />}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Homepage;
