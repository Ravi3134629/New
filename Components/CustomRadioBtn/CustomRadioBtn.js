import React from "react";
import "./CustomRadioBtn.css";

const CustomRadioBtn = ({
  title,
  img,
  i,
  setBlouseChoices,
  blouseChoices,
  url,
  name,
}) => {
  const handleClick = (e) => {
    const { name, id } = e.target;
    setBlouseChoices({ ...blouseChoices, [name]: id });
  };

  return (
    <>
      <input
        type="radio"
        name={name}
        id={i}
        className="radio-btn"
        onClick={handleClick}
      />
      <label htmlFor={i} className={`radio-label`}>
        <div className="radio-content">
          <img src={url + img} className="radio-content-img" alt="img" />
          <div className="radio-content-title">{title}</div>
        </div>
      </label>
    </>
  );
};

export default CustomRadioBtn;
