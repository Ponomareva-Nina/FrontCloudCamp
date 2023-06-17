import { Field, Form, Formik, FormikValues } from "formik";
import cn from "classnames";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import commonStyles from "../MultiStepForm.module.scss";
import { Sex } from "../../../interfaces/profile-form.interface";
import { Button } from "../../UI";
import { StepProps } from "../interfaces";

export const StepOne: FC<StepProps> = ({ form, nextHandler, validators }) => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  const submitHandler = (values: FormikValues) => {
    nextHandler(values);
  };

  return (
    <Formik
      initialValues={form}
      onSubmit={submitHandler}
      validationSchema={validators}
      enableReinitialize
    >
      {({ errors, touched }) => (
        <Form className={commonStyles.form}>
          <div className={commonStyles.field}>
            <label htmlFor="field-nickname">
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
          </div>

          <div className={commonStyles.field}>
            <label htmlFor="field-name">
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
          </div>

          <div className={commonStyles.field}>
            <label htmlFor="field-sername">
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
          </div>

          <div className={commonStyles.field}>
            <label htmlFor="field-sex">
              <p>Sex</p>
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
          </div>

          <div className={commonStyles.btns_panel}>
            <Button appearance="outline" onClick={goToMainPage} id="button-back">
              Назад
            </Button>
            <Button
              onClick={submitHandler}
              id="button-next"
              disabled={!!errors.nickname || !!errors.name || !!errors.surname || !!errors.sex}
            >
              Далее
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
