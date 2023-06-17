/* eslint-disable import/no-extraneous-dependencies */
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { FC, useId } from "react";
import { StepLabel } from "@mui/material";

interface StepperProps {
  currentStep: number;
  stepsLength: number;
}

export const MultiStepper: FC<StepperProps> = ({ currentStep, stepsLength }) => {
  const customStyles = {
    padding: "2rem",
    "& .MuiStepIcon-root": {
      height: "2rem",
      width: "2rem",
      "& .MuiStepIcon-text": {
        fill: "none",
      },
    },
    "& .Mui-active": {
      "& .MuiStepConnector-line": {
        borderColor: "#5558FA",
      },
    },
    "& .Mui-completed": {
      "& .MuiStepConnector-line": {
        borderColor: "#5558FA",
      },
    },
    "& .MuiStepConnector-root": {
      top: "8px",
      left: "calc(-50% + 10px)",
      right: "calc(50% + 10px)",
      "& .MuiStepConnector-line": {
        borderTopWidth: ".5rem",
      },
    },
  };

  return (
    <Stepper activeStep={currentStep} alternativeLabel sx={customStyles}>
      {new Array(stepsLength).fill("step").map((step, index) => {
        const isCompleted = currentStep > index;
        return (
          <Step key={useId()} completed={isCompleted}>
            <StepLabel>{index + 1}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};
