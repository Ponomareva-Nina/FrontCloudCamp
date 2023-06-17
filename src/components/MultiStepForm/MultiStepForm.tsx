import { useState } from "react";
import { ProfileForm, Sex } from "../../interfaces/profile-form.interface";
import { useAppSelector } from "../../redux/redux-hooks";
import { StepOne } from "./StepOne/StepOne";
import { Validators } from "./validators";
import { MultiStepper } from "./Stepper/Stepper";
import { StepTwo } from "./StepTwo/StepTwo";
import { StepThree } from "./StepThree/StepThree";

export const MultiStepForm = () => {
  const user = useAppSelector((state) => state.user.entity);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<ProfileForm>({
    nickname: "",
    name: user ? user.name : "",
    surname: user ? user.surname : "",
    sex: Sex.MALE,
    advantages: [""],
    checkboxInfo: [""],
    radioInfo: "",
    about: "",
  });
  const steps = [
    <StepOne form={formData} nextHandler={nextHandler} validators={Validators} />,
    <StepTwo form={formData} nextHandler={nextHandler} validators={Validators} />,
    <StepThree form={formData} nextHandler={nextHandler} validators={Validators} />,
  ];

  function nextHandler() {
    console.log("next");
    setCurrentStep((prev) => {
      return prev < steps.length ? prev + 1 : prev;
    });
  }

  function prevHandler() {
    console.log("prev");
    setCurrentStep((prev) => {
      return prev > 0 ? prev - 1 : prev;
    });
  }

  return (
    <div>
      <MultiStepper currentStep={currentStep} stepsLength={steps.length} />
      {steps[currentStep]}
    </div>
  );
};
