import React from "react";
import CustomRadioBtn from "../../CustomRadioBtn/CustomRadioBtn";
import { data2 } from "../data";
import "./ChooseBlouseStep2.css";

const ChooseBlouseStep2 = ({ setBlouseChoices, blouseChoices }) => {
  const url = "./images/blouse/step2/";

  return (
    <>
      <h1>Choose your own style statement </h1>

      <div className="blouse-step1">
        {data2.map((item) => {
          return (
            <CustomRadioBtn
              title={item.title}
              img={item.img}
              key={item.i}
              i={item.i}
              setBlouseChoices={setBlouseChoices}
              blouseChoices={blouseChoices}
              url={url}
              name="backNeck"
            />
          );
        })}
      </div>
    </>
  );
};

export default ChooseBlouseStep2;
