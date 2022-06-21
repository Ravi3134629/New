import React, { useState } from "react";
import "./Blouse.css";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import FrontImage from "../../Components/FrontImage/FrontImage";
import Footer from "../../Components/Footer/Footer";
import ChooseBlouseStep1 from "../../Components/ChooseBlouse/ChooseBlouseStep1/ChooseBlouseStep1";
import HorizontalLabelPositionBelowStepper from "../../Components/ChooseBlouse/Stepper/Stepper";
import ChooseBlouseStep2 from "../../Components/ChooseBlouse/ChooseBlouseStep2/ChooseBlouseStep2";
import ChooseBlouseStep3 from "../../Components/ChooseBlouse/ChooseBlouseStep3/ChooseBlouseStep3";
import ChooseBlouseStep4 from "../../Components/ChooseBlouse/ChooseBlouseStep4/ChooseBlouseStep4";
import ChooseBlouseStep5 from "../../Components/ChooseBlouse/ChooseBlouseStep5/ChooseBlouseStep5";
import ChooseBlouseStep6 from "../../Components/ChooseBlouse/ChooseBlouseStep6/ChooseBlouseStep6";
import YourCart from "../../Components/YourCart/YourCart";

const Blouse = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const initialFormState = {
    frontNeck: 0,
    backNeck: 0,
    sleeves: 0,
    cut: 0,
    addOns: 0,
  };

  const [blouseChoices, setBlouseChoices] = useState(initialFormState);

  const handleBack = () => {
    if (activeStep === 0) return;
    setActiveStep(activeStep - 1);
  };
  const handleNext = () => {
    if (activeStep === 7) return;
    setActiveStep(activeStep + 1);
  };

  return (
    <div>
      <Navbar2 />
      <FrontImage />
      <div className="blouse-container">
        <h1>Preference for Basics Collections</h1>
        <h2>Choose various designs for Blouse : Front Neck</h2>
        <HorizontalLabelPositionBelowStepper activeStep={activeStep} />

        {activeStep === 0 && (
          <ChooseBlouseStep1
            blouseChoices={blouseChoices}
            setBlouseChoices={setBlouseChoices}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 1 && (
          <ChooseBlouseStep2
            blouseChoices={blouseChoices}
            setBlouseChoices={setBlouseChoices}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 2 && (
          <ChooseBlouseStep3
            blouseChoices={blouseChoices}
            setBlouseChoices={setBlouseChoices}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 3 && (
          <ChooseBlouseStep4
            blouseChoices={blouseChoices}
            setBlouseChoices={setBlouseChoices}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 4 && (
          <ChooseBlouseStep5
            blouseChoices={blouseChoices}
            setBlouseChoices={setBlouseChoices}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 5 && (
          <ChooseBlouseStep6
            blouseChoices={blouseChoices}
            setBlouseChoices={setBlouseChoices}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 6 && <YourCart />}

        <div className="buttons-cnt">
          <button onClick={handleBack} disabled={activeStep === 0}>
            Back
          </button>
          <button onClick={handleNext} disabled={activeStep === 7}>
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blouse;
