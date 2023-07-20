import { ProfileForm } from "../../interfaces/profile-form.interface";

export interface StepProps {
  form: ProfileForm;
  nextHandler: (stepData: Partial<ProfileForm>, isLastStep?: boolean) => void;
  prevHandler: (stepData: Partial<ProfileForm>) => void;
}
