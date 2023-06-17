/* eslint-disable import/no-extraneous-dependencies */
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { FC, useId } from "react";
import { StepLabel } from "@mui/material";
import icon from "../../../assets/done_icon.svg";

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
    "& .icon": {
      height: "2rem",
      width: "2rem",
      background: "#A6A6A6",
      borderRadius: "50%",
    },
    "& .Mui-active": {
      "& .MuiStepConnector-line": {
        borderColor: "#5558FA",
      },
      "& .icon": {
        background:
          "radial-gradient(circle at center, white 0, white 2px, #5558FA 3px, #5558FA 100%)",
      },
    },
    "& .Mui-completed": {
      "& .MuiStepConnector-line": {
        borderColor: "#5558FA",
      },
      "& .icon": {
        background: `#5558FA url('${icon}') no-repeat center`,
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
            <StepLabel icon={<div className="icon" />}>{index + 1}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};
