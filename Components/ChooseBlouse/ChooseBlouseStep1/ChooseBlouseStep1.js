import React from "react";
import CustomRadioBtn from "../../CustomRadioBtn/CustomRadioBtn";
import { data1 } from "../data";
import "./ChooseBlouseStep1.css";

const ChooseBlouseStep1 = ({ setBlouseChoices, blouseChoices }) => {
  const url = "./images/blouse/step1/";

  return (
    <>
      <h1>Choose your own style statement </h1>
      <div className="blouse-step1">
        {data1.map((item) => {
          return (
            <CustomRadioBtn
              title={item.title}
              img={item.img}
              key={item.i}
              i={item.i}
              url={url}
              setBlouseChoices={setBlouseChoices}
              blouseChoices={blouseChoices}
              name="frontNeck"
            />
          );
        })}
      </div>
    </>
  );
};

export default ChooseBlouseStep1;
