import React from "react";
import CustomRadioBtn from "../../CustomRadioBtn/CustomRadioBtn";
import { data1 } from "../data";
import "./ChooseSalwarStep1.css";

const ChooseSalwarStep1 = ({ setSalwarChoices, salwarChoices }) => {
  const url = "./images/salwar/step1/";

  return (
    <>
      <h1>Choose your own style statement </h1>
      <div className="salwar-step1">
        {data1.map((item) => {
          return (
            <CustomRadioBtn
              title={item.title}
              img={item.img}
              key={item.i}
              i={item.i}
              url={url}
              setSalwarChoices={setSalwarChoices}
              salwarChoices={salwarChoices}
              name="frontNeck"
            />
          );
        })}
      </div>
    </>
  );
};

export default ChooseSalwarStep1;
