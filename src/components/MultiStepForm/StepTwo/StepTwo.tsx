/* eslint-disable react/no-array-index-key */
import {
  ErrorMessage,
  Field,
  FieldArray,
  FieldArrayRenderProps,
  Form,
  Formik,
  FormikValues,
} from "formik";
import { FC, useId } from "react";
import cn from "classnames";
import { ReactSVG } from "react-svg";
import commonStyles from "../MultiStepForm.module.scss";
import styles from "./StepTwo.module.scss";
import { Button } from "../../UI";
import { StepProps } from "../interfaces";
import deleteIcon from "../../../assets/delete_icon.svg";
import { stepTwoValidators } from "../validators";

export const StepTwo: FC<StepProps> = ({ form, prevHandler, nextHandler }) => {
  const submitHandler = (values: FormikValues) => {
    nextHandler(values);
  };

  return (
    <Formik
      initialValues={form}
      onSubmit={submitHandler}
      validationSchema={stepTwoValidators}
      enableReinitialize
    >
      {({ errors, values, isValid, submitForm }) => (
        <Form className={commonStyles.form}>
          <div className={styles.advantages_container}>
            <p>Advantages</p>
            <FieldArray
              name="advantages"
              render={(arrayHelpers: FieldArrayRenderProps) => (
                <div className={styles.advantage_group}>
                  {values.advantages.map((advantage, index) => (
                    <div key={index} className={styles.advantage}>
                      <div className={cn(commonStyles.field, styles.field)}>
                        <Field
                          name={`advantages[${index}]`}
                          id={`field-advantages-${index}`}
                          value={advantage}
                          placeholder="Enter advantage"
                          className={cn("text-input")}
                        />
                        <ErrorMessage
                          name={`advantages[${index}]`}
                          component="span"
                          className="error"
                        />
                      </div>
                      <Button
                        appearance="ghost"
                        onClick={() => arrayHelpers.remove(index)}
                        id={`button-remove-${index}`}
                      >
                        <ReactSVG src={deleteIcon} />
                      </Button>
                    </div>
                  ))}
                  {typeof errors.advantages === "string" ? (
                    <div className="error">{errors.advantages}</div>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => arrayHelpers.push("")}
                    id="button-add"
                    className={cn("btn", styles.btn_add)}
                  >
                    +
                  </button>
                </div>
              )}
            />
          </div>

          <div className={commonStyles.field} role="group" aria-labelledby="checkbox-group">
            <p id="checkbox-group">Checkbox group</p>
            {values.checkboxGroup.map((checkbox) => (
              <label
                className={styles.field_group}
                key={useId()}
                htmlFor={`field-checkbox-group-option-${checkbox}`}
              >
                <Field
                  type="checkbox"
                  name="checkboxChecked"
                  value={checkbox.toString()}
                  id={`field-checkbox-group-option-${checkbox}`}
                />
                {checkbox}
              </label>
            ))}
            <ErrorMessage name="checkboxGroup" component="span" className="error" />
          </div>

          <div className={commonStyles.field} role="group" aria-labelledby="radio-group">
            <p id="radio-group">Radio group</p>
            {values.radioGroup.map((radio) => (
              <label
                className={styles.field_group}
                key={useId()}
                htmlFor={`field-radio-group-option-${radio}`}
              >
                <Field
                  type="radio"
                  name="radioChecked"
                  value={radio.toString()}
                  id={`field-radio-group-option-${radio}`}
                />
                {radio}
              </label>
            ))}
            <ErrorMessage name="radioGroup" component="span" className="error" />
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
