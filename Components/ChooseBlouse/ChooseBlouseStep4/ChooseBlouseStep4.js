import React from "react";
import CustomRadioBtn from "../../CustomRadioBtn/CustomRadioBtn";
import { data4 } from "../data";
// import "./ChooseBlouseStep4.css";

const ChooseBlouseStep4 = ({ setBlouseChoices, blouseChoices }) => {
  const url = "./images/blouse/step4/";

  return (
    <>
      <h1>Choose your own style statement </h1>

      <div className="blouse-step1">
        {data4.map((item) => {
          return (
            <CustomRadioBtn
              title={item.title}
              img={item.img}
              key={item.i}
              i={item.i}
              setBlouseChoices={setBlouseChoices}
              blouseChoices={blouseChoices}
              url={url}
              name="cut"
            />
          );
        })}
      </div>
    </>
  );
};

export default ChooseBlouseStep4;
