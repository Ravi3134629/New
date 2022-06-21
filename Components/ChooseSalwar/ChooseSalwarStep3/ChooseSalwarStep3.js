import React from "react";
import CustomRadioBtn from "../../CustomRadioBtn/CustomRadioBtn";
import { data3 } from "../data";
// import "./ChooseBlouseStep3.css";

const ChooseSalwarStep3 = ({ setSalwarChoices, salwarChoices }) => {
  const url = "./images/salwar/step3/";

  return (
    <>
      <h1>Choose your own style statement </h1>
      <div className="salwar-step1">
        {data3.map((item) => {
          return (
            <CustomRadioBtn
              title={item.title}
              img={item.img}
              key={item.i}
              i={item.i}
              setSalwarChoices={setSalwarChoices}
              salwarChoices={salwarChoices}
              url={url}
              name="sleeves"
            />
          );
        })}
      </div>
    </>
  );
};

export default ChooseSalwarStep3;
