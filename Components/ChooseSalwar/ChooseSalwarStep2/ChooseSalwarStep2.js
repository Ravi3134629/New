import React from "react";
import CustomRadioBtn from "../../CustomRadioBtn/CustomRadioBtn";
import { data2 } from "../data";
import "./ChooseSalwarStep2.css";

const ChooseSalwarStep2 = ({ setSalwarChoices, salwarChoices }) => {
  const url = "./images/salwar/step2/";

  return (
    <>
      <h1>Choose your own style statement </h1>

      <div className="salwar-step1">
        {data2.map((item) => {
          return (
            <CustomRadioBtn
              title={item.title}
              img={item.img}
              key={item.i}
              i={item.i}
              setSalwarChoices={setSalwarChoices}
              salwarChoices={salwarChoices}
              url={url}
              name="backNeck"
            />
          );
        })}
      </div>
    </>
  );
};

export default ChooseSalwarStep2;
