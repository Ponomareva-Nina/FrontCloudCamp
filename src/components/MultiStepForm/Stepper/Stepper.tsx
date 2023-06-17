import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { FC, useId } from "react";
import { StepLabel } from "@mui/material";
import { customStyles } from "./stepper-custom-styles";

interface StepperProps {
  currentStep: number;
  stepsLength: number;
}

export const MultiStepper: FC<StepperProps> = ({ currentStep, stepsLength }) => {
  return (
    <Stepper activeStep={currentStep} alternativeLabel sx={customStyles}>
      {new Array(stepsLength).fill("step").map((step, index) => {
        const isCompleted = currentStep > index;
        return (
          <Step key={useId()} completed={isCompleted}>
            <StepLabel icon={<div className="icon" />}>{index + 1}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};
