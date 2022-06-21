import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Front Neck",
  "Back Neck",
  "Sleeve",
  "Cut",
  "Collections",
  "Add-Ons",
  "Your Cart",
];

export default function HorizontalLabelPositionBelowStepper({ activeStep }) {
  return (
    <Box sx={{ width: "50%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
