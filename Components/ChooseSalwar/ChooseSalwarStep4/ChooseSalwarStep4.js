import React from "react";
import CustomRadioBtn from "../../CustomRadioBtn/CustomRadioBtn";
import { data4 } from "../data";
// import "./ChooseBlouseStep4.css";

const ChooseSalwarStep4 = ({ setSalwarChoices, salwarChoices }) => {
  const url = "./images/salwar/step4/";

  return (
    <>
      <h1>Choose your own style statement </h1>

      <div className="salwar-step1">
        {data4.map((item) => {
          return (
            <CustomRadioBtn
              title={item.title}
              img={item.img}
              key={item.i}
              i={item.i}
              setSalwarChoices={setSalwarChoices}
              salwarChoices={salwarChoices}
              url={url}
              name="cut"
            />
          );
        })}
      </div>
    </>
  );
};

export default ChooseSalwarStep4;
