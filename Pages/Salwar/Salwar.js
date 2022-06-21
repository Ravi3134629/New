import React, { useState } from "react";
import "./Salwar.css";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import FrontImage from "../../Components/FrontImage/FrontImage";
import Footer from "../../Components/Footer/Footer";
import ChooseSalwarStep1 from "../../Components/ChooseSalwar/ChooseSalwarStep1/ChooseSalwarStep1";
import HorizontalLabelPositionBelowStepper from "../../Components/ChooseSalwar/Stepper/Stepper";
import ChooseSalwarStep2 from "../../Components/ChooseSalwar/ChooseSalwarStep2/ChooseSalwarStep2";
import ChooseSalwarStep3 from "../../Components/ChooseSalwar/ChooseSalwarStep3/ChooseSalwarStep3";
import ChooseSalwarStep4 from "../../Components/ChooseSalwar/ChooseSalwarStep4/ChooseSalwarStep4";
import ChooseSalwarStep5 from "../../Components/ChooseSalwar/ChooseSalwarStep5/ChooseSalwarStep5";
import ChooseSalwarStep6 from "../../Components/ChooseSalwar/ChooseSalwarStep6/ChooseSalwarStep6";
import YourCart from "../../Components/YourCart/YourCart";

const Salwar = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const initialFormState = {
    frontNeck: 0,
    backNeck: 0,
    sleeves: 0,
    cut: 0,
    addOns: 0,
  };

  const [salwarChoices, setSalwarChoices] = useState(initialFormState);

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
      <div className="salwar-container">
        <h1>Preference for Basics Collections</h1>
        <h2>Choose various designs for Salwar : Front Neck</h2>
        <HorizontalLabelPositionBelowStepper activeStep={activeStep} />

        {activeStep === 0 && (
          <ChooseSalwarStep1
            salwarChoices={salwarChoices}
            setSalwarChoices={setSalwarChoices}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 1 && (
          <ChooseSalwarStep2
            salwarChoices={salwarChoices}
            setSalwarChoices={setSalwarChoices}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 2 && (
          <ChooseSalwarStep3
            salwarChoices={salwarChoices}
            setSalwarChoices={setSalwarChoices}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 3 && (
          <ChooseSalwarStep4
            salwarChoices={salwarChoices}
            setSalwarChoices={setSalwarChoices}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 4 && (
          <ChooseSalwarStep5
            salwarChoices={salwarChoices}
            setSalwarChoices={setSalwarChoices}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 5 && (
          <ChooseSalwarStep6
            salwarChoices={salwarChoices}
            setSalwarChoices={setSalwarChoices}
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

export default Salwar;
