import React from "react";
import CustomRadioBtn from "../../CustomRadioBtn/CustomRadioBtn";
import { data6 } from "../data";
// import "./ChooseBlouseStep4.css";

const ChooseBlouseStep4 = ({ setBlouseChoices, blouseChoices }) => {
  const url = "./images/blouse/step6/";

  return (
    <>
      <h1>Add this amazing collection and get exciting offers !!</h1>

      <div className="blouse-step1">
        {data6.map((item) => {
          return (
            <CustomRadioBtn
              title={item.title}
              img={item.img}
              key={item.i}
              i={item.i}
              setBlouseChoices={setBlouseChoices}
              blouseChoices={blouseChoices}
              url={url}
              name="addOns"
            />
          );
        })}
      </div>
    </>
  );
};

export default ChooseBlouseStep4;
