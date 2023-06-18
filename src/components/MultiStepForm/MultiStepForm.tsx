import { useState } from "react";
import { ProfileForm } from "../../interfaces/profile-form.interface";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { StepOne } from "./StepOne/StepOne";
import { MultiStepper } from "../UI";
import { StepTwo } from "./StepTwo/StepTwo";
import { StepThree } from "./StepThree/StepThree";
import styles from "./MultiStepForm.module.scss";
import { SubmitPopup } from "../SubmitPopup/SubmitPopup";
import { submitUserForm } from "../../redux/user/user.actions";
import { Nullable } from "../../interfaces/util-types";

export const MultiStepForm = () => {
  const user = useAppSelector((state) => state.user.entity);
  const dispatch = useAppDispatch();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<ProfileForm>({
    nickname: "",
    name: user ? user.name : "",
    surname: user ? user.surname : "",
    sex: "",
    advantages: ["", "", ""],
    checkboxGroup: [1, 2, 3],
    checkboxChecked: [],
    radioGroup: [1, 2, 3],
    radioChecked: null,
    about: "",
  });
  const [modalOpened, setModalOpened] = useState(false);
  const [submitted, setSubmitted] = useState<Nullable<boolean>>(null);
  const closeModal = () => {
    setModalOpened(false);
  };

  const submitForm = async () => {
    const res = await dispatch(submitUserForm(formData));
    if (res && res.payload.status === "success") {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
    setModalOpened(true);
  };

  const nextHandler = (stepData: Partial<ProfileForm>, isLastStep = false) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    if (isLastStep) {
      submitForm();
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const prevHandler = (stepData: Partial<ProfileForm>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setCurrentStep((prev) => {
      return prev > 0 ? prev - 1 : prev;
    });
  };

  const steps = [
    <StepOne form={formData} nextHandler={nextHandler} prevHandler={prevHandler} />,
    <StepTwo form={formData} nextHandler={nextHandler} prevHandler={prevHandler} />,
    <StepThree form={formData} nextHandler={nextHandler} prevHandler={prevHandler} />,
  ];

  return (
    <>
      <div className={styles.container}>
        <MultiStepper currentStep={currentStep} stepsLength={steps.length} />
        {steps[currentStep]}
      </div>
      {modalOpened && <SubmitPopup success={!!submitted} closeHandler={closeModal} />}
    </>
  );
};
