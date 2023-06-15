import cn from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance?: "normal" | "disabled" | "outline";
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  appearance = "normal",
  ...rest
}) => {
  return (
    <button {...rest} className={cn(styles.btn, styles[appearance])} type="button">
      {children}
    </button>
  );
};
