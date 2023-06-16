import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import cn from "classnames";
import styles from "./ContactForm.module.scss";
import { useAppSelector } from "../../../redux/redux-hooks";

const Validation = Yup.object().shape({
  phone: Yup.string().min(11, "Too Short!").max(11, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const ContactForm = () => {
  const user = useAppSelector((state) => state.user.entity);
  return (
    <Formik
      initialValues={{ phone: user ? user.phone : "", email: user ? user.email : "" }}
      onSubmit={() => {}}
      validationSchema={Validation}
      enableReinitialize
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <label htmlFor="phone" className={styles.field}>
            <p>Номер телефона</p>
            <Field
              id="phone"
              type="tel"
              name="phone"
              placeholder="Phone number"
              className={cn("text-input")}
              disabled
            />
          </label>
          {errors.phone && touched.phone && <div className="error">{errors.phone}</div>}

          <label htmlFor="email" className={styles.field}>
            <p>Email</p>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className={cn("text-input")}
              disabled
            />
          </label>
          {errors.email && touched.email && <div className="error">{errors.email}</div>}

          <button type="submit" className="hidden">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
