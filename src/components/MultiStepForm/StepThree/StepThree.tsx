import { Field, Form, Formik } from "formik";
import cn from "classnames";
import { FC } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import commonStyles from "../common-form-styles.module.scss";
import { ProfileForm, Sex } from "../../../interfaces/profile-form.interface";
import { Button } from "../../UI";

interface StepThreeProps {
  form: ProfileForm;
  nextHandler: () => void;
  validators: Yup.ObjectSchema<ProfileForm>;
}

export const StepThree: FC<StepThreeProps> = ({ form, nextHandler, validators }) => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  return (
    <Formik
      initialValues={form}
      onSubmit={nextHandler}
      validationSchema={validators}
      enableReinitialize
    >
      {({ errors, touched }) => (
        <Form className={commonStyles.form}>
          <label htmlFor="field-nickname" className={commonStyles.field}>
            <p>Nickname</p>
            <Field
              id="field-nickname"
              type="string"
              name="nickname"
              placeholder="Nickname"
              className={cn("text-input")}
            />
          </label>
          {errors.nickname && touched.nickname && <div className="error">{errors.nickname}</div>}

          <label htmlFor="field-name" className={commonStyles.field}>
            <p>Name</p>
            <Field
              id="field-name"
              type="string"
              name="name"
              placeholder="Name"
              className={cn("text-input")}
            />
          </label>
          {errors.name && touched.name && <div className="error">{errors.name}</div>}

          <label htmlFor="field-sername" className={commonStyles.field}>
            <p>Surname</p>
            <Field
              id="field-sername"
              type="string"
              name="surname"
              placeholder="Surname"
              className={cn("text-input")}
            />
          </label>
          {errors.surname && touched.surname && <div className="error">{errors.surname}</div>}

          <label htmlFor="field-sex" className={commonStyles.field}>
            <p>Surname</p>
            <Field
              id="field-sex"
              component="select"
              name="sex"
              placeholder="Sex"
              className={cn("text-input")}
            >
              <option value={Sex.MALE} id="field-sex-option-man">
                {Sex.MALE}
              </option>
              <option value={Sex.FEMALE} id="field-sex-option-woman">
                {Sex.FEMALE}
              </option>
            </Field>
          </label>
          {errors.sex && touched.sex && <div className="error">{errors.sex}</div>}

          <Button appearance="outline" onClick={goToMainPage} id="button-back">
            Назад
          </Button>
          <Button onClick={nextHandler} id="button-next">
            Далее
          </Button>
        </Form>
      )}
    </Formik>
  );
};
