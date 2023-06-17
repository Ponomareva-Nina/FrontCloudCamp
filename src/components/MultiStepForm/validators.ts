import * as Yup from "yup";
import { Sex } from "../../interfaces/profile-form.interface";

export const stepOneValidators = Yup.object().shape({
  nickname: Yup.string().max(30, "Nickname is too long!").required("This field is required"),
  name: Yup.string().required("This field is required"),
  surname: Yup.string().required("This field is required"),
  sex: Yup.mixed<Sex>().oneOf(Object.values(Sex)).required("This field is required"),
});

export const stepTwoValidators = Yup.object().shape({
  advantages: Yup.array().of(Yup.string()).required("This field is required"),
  checkboxInfo: Yup.array().of(Yup.string()).required("This field is required"),
  radioInfo: Yup.string().required("This field is required"),
});

export const stepThreeValidators = Yup.object().shape({
  about: Yup.string().required("This field is required"),
});
