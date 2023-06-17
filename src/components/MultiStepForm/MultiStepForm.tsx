import { useState } from "react";
import { ProfileForm, Sex } from "../../interfaces/profile-form.interface";
import { useAppSelector } from "../../redux/redux-hooks";
import { StepOne } from "./StepOne/StepOne";
import { Validators } from "./validators";
import { MultiStepper } from "../UI";
import { StepTwo } from "./StepTwo/StepTwo";
import { StepThree } from "./StepThree/StepThree";
import styles from "./MultiStepForm.module.scss";

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

  const nextHandler = (stepData: Partial<ProfileForm>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setCurrentStep((prev) => prev + 1);
  };

  const prevHandler = (stepData: Partial<ProfileForm>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setCurrentStep((prev) => {
      return prev > 0 ? prev - 1 : prev;
    });
  };

  const steps = [
    <StepOne
      form={formData}
      nextHandler={nextHandler}
      prevHandler={prevHandler}
      validators={Validators}
    />,
    <StepTwo
      form={formData}
      nextHandler={nextHandler}
      prevHandler={prevHandler}
      validators={Validators}
    />,
    <StepThree
      form={formData}
      nextHandler={nextHandler}
      prevHandler={prevHandler}
      validators={Validators}
    />,
  ];

  return (
    <div className={styles.container}>
      <MultiStepper currentStep={currentStep} stepsLength={steps.length} />
      {steps[currentStep]}
    </div>
  );
};
