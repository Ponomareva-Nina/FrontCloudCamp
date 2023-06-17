import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import cn from "classnames";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import commonStyles from "../MultiStepForm.module.scss";
import { Sex } from "../../../interfaces/profile-form.interface";
import { Button } from "../../UI";
import { StepProps } from "../interfaces";
import { stepOneValidators } from "../validators";

export const StepOne: FC<StepProps> = ({ form, nextHandler }) => {
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
      validationSchema={stepOneValidators}
      enableReinitialize
      validateOnChange
    >
      {({ submitForm, isValid }) => (
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
            <ErrorMessage name="nickname" component="span" className="error" />
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
            <ErrorMessage name="name" component="span" className="error" />
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
            <ErrorMessage name="surname" component="span" className="error" />
          </div>

          <div className={commonStyles.field}>
            <label htmlFor="field-sex">
              <p>Sex</p>
              <Field id="field-sex" component="select" name="sex" className={cn("text-input")}>
                <option defaultChecked disabled className="disabled" value="">
                  Не выбрано
                </option>
                <option value={Sex.MALE} id="field-sex-option-man">
                  {Sex.MALE}
                </option>
                <option value={Sex.FEMALE} id="field-sex-option-woman">
                  {Sex.FEMALE}
                </option>
              </Field>
            </label>
            <ErrorMessage name="sex" component="span" className="error" />
          </div>

          <div className={commonStyles.btns_panel}>
            <Button appearance="outline" onClick={goToMainPage} id="button-back">
              Назад
            </Button>
            <Button onClick={submitForm} id="button-next" disabled={!isValid}>
              Далее
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
