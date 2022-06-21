import React from "react";
import CustomRadioBtn from "../../CustomRadioBtn/CustomRadioBtn";
import { data6 } from "../data";
// import "./ChooseBlouseStep4.css";

const ChooseSalwarStep4 = ({ setSalwarChoices, salwarChoices }) => {
  const url = "./images/salwar/step6/";

  return (
    <>
      <h1>Add this amazing collection and get exciting offers !!</h1>

      <div className="salwar-step1">
        {data6.map((item) => {
          return (
            <CustomRadioBtn
              title={item.title}
              img={item.img}
              key={item.i}
              i={item.i}
              setSalwarChoices={setSalwarChoices}
              salwarChoices={salwarChoices}
              url={url}
              name="addOns"
            />
          );
        })}
      </div>
    </>
  );
};

export default ChooseSalwarStep4;
