import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import { FC, useState } from "react";
import cn from "classnames";
import commonStyles from "../MultiStepForm.module.scss";
import { Button } from "../../UI";
import { StepProps } from "../interfaces";
import { stepThreeValidators } from "../validators";

export const StepThree: FC<StepProps> = ({ form, prevHandler, nextHandler }) => {
  const submitHandler = (values: FormikValues) => {
    nextHandler(values, true);
  };

  const [digitCounter, setDigitCounter] = useState(0);

  const updateCounter = (e: Event) => {
    const textarea = e.target as HTMLTextAreaElement;
    setDigitCounter(textarea.value.length);
  };

  return (
    <Formik
      initialValues={form}
      onSubmit={submitHandler}
      validationSchema={stepThreeValidators}
      enableReinitialize
    >
      {({ values, submitForm, isValid, handleChange }) => (
        <Form className={commonStyles.form}>
          <div className={commonStyles.field}>
            <label htmlFor="field-about" className={commonStyles.textarea}>
              <p>About</p>
              <Field
                id="field-about"
                as="textarea"
                name="about"
                placeholder="Write about yourself"
                className={cn("text-input")}
                rows={4}
                max={200}
                onChange={(e: Event) => {
                  handleChange(e);
                  updateCounter(e);
                }}
              >
                {values.about}
              </Field>
            </label>
            <div className={commonStyles.info}>
              <ErrorMessage name="about" component="span" className="error" />
              <span className={commonStyles.counter}>{`${digitCounter}/200`}</span>
            </div>
          </div>

          <div className={commonStyles.btns_panel}>
            <Button appearance="outline" id="button-back" onClick={() => prevHandler(values)}>
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
