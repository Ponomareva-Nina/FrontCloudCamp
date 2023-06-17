import * as Yup from "yup";
import { ProfileForm } from "../../interfaces/profile-form.interface";

export interface StepProps {
  form: ProfileForm;
  nextHandler: (stepData: Partial<ProfileForm>) => void;
  prevHandler: (stepData: Partial<ProfileForm>) => void;
  validators: Yup.ObjectSchema<ProfileForm>;
}
