import { Field, Form, Formik, FormikValues } from "formik";
import { FC } from "react";
import commonStyles from "../MultiStepForm.module.scss";
import { Button } from "../../UI";
import { StepProps } from "../interfaces";

export const StepTwo: FC<StepProps> = ({ form, prevHandler, nextHandler, validators }) => {
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
          <div className={commonStyles.field}>field</div>

          <div className={commonStyles.field}>field</div>

          <div className={commonStyles.field}>field</div>

          <div className={commonStyles.btns_panel}>
            <Button appearance="outline" id="button-back">
              Назад
            </Button>
            <Button onClick={submitHandler} id="button-next" disabled={false}>
              Далее
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
