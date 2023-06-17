import * as Yup from "yup";
import { ProfileForm, Sex } from "../../interfaces/profile-form.interface";

export const Validators: Yup.ObjectSchema<ProfileForm> = Yup.object().shape({
  nickname: Yup.string().max(30, "Too Long!").required("Required"),
  name: Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  sex: Yup.mixed<Sex>().oneOf(Object.values(Sex)).required("Required"),
  advantages: Yup.array().of(Yup.string()).required("Required"),
  checkboxInfo: Yup.array().of(Yup.string()).required("Required"),
  radioInfo: Yup.string().required("Required"),
  about: Yup.string().required("Required"),
});
