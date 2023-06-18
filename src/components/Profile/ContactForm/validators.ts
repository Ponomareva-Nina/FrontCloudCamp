/* eslint-disable no-useless-escape */
import * as Yup from "yup";

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const Validation = Yup.object().shape({
  phone: Yup.string()
    .required("Required")
    .matches(/^[+0-9]*$/, "Please enter correct phone number"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
    .matches(emailRegex, "Invalid email"),
});
