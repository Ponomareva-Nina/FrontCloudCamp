import { Field, Form, Formik, FieldProps, FormikValues } from "formik";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import MaskedInput from "react-text-mask";
import styles from "./ContactForm.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-hooks";
import { Button } from "../../UI";
import { changePhone } from "../../../redux/user/user.slice";
import { Validation } from "./validators";

export const ContactForm = () => {
  const user = useAppSelector((state) => state.user.entity);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handlePhoneFormat = (phone: string): string => {
    const phoneNumber = phone
      .replace(/\)/g, "")
      .replace(/\(/g, "")
      .replace(/-/g, "")
      .replace(/ /g, "");
    return phoneNumber;
  };

  const submitHandler = (values: FormikValues) => {
    const phoneNumber = handlePhoneFormat(values.phone);
    dispatch(changePhone(phoneNumber));
    navigate("/create");
  };

  const phoneNumberMask = [
    "+",
    "7",
    " ",
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ];

  return (
    <Formik
      initialValues={{ phone: user ? user.phone : "", email: user ? user.email : "" }}
      onSubmit={submitHandler}
      validationSchema={Validation}
      enableReinitialize
    >
      {({ errors, touched, submitForm, setFieldValue }) => (
        <Form className={styles.form}>
          <label htmlFor="phone" className={styles.field}>
            <p>Номер телефона</p>
            <Field name="phone" placeholder="Phone number" className={cn("text-input")}>
              {(props: FieldProps) => (
                <MaskedInput
                  {...props.field}
                  type="text"
                  id="phone"
                  mask={phoneNumberMask}
                  placeholder="Enter your phone number"
                  onChange={(e) => {
                    const value = handlePhoneFormat(e.target.value) || "";
                    setFieldValue("phone", value);
                  }}
                  className="text-input"
                />
              )}
            </Field>
          </label>
          {errors.phone && touched.phone && <div className="error">{errors.phone}</div>}

          <label htmlFor="email" className={styles.field}>
            <p>Email</p>
            <Field id="email" name="email" placeholder="Email" className={cn("text-input")} />
          </label>
          {errors.email && touched.email && <div className="error">{errors.email}</div>}

          <Button id="button-start" appearance="normal" onClick={submitForm}>
            Начать
          </Button>
        </Form>
      )}
    </Formik>
  );
};
