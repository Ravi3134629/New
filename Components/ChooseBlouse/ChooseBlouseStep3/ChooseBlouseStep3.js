import React from "react";
import CustomRadioBtn from "../../CustomRadioBtn/CustomRadioBtn";
import { data3 } from "../data";
// import "./ChooseBlouseStep3.css";

const ChooseBlouseStep3 = ({ setBlouseChoices, blouseChoices }) => {
  const url = "./images/blouse/step3/";

  return (
    <>
      <h1>Choose your own style statement </h1>
      <div className="blouse-step1">
        {data3.map((item) => {
          return (
            <CustomRadioBtn
              title={item.title}
              img={item.img}
              key={item.i}
              i={item.i}
              setBlouseChoices={setBlouseChoices}
              blouseChoices={blouseChoices}
              url={url}
              name="sleeves"
            />
          );
        })}
      </div>
    </>
  );
};

export default ChooseBlouseStep3;
