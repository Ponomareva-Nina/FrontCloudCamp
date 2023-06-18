import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";
import styles from "./SubmitPopup.module.scss";
import successIcon from "../../assets/success.svg";
import errorIcon from "../../assets/error.svg";
import { Button } from "../UI";

interface SubmitPopupProps {
  success: boolean;
  closeHandler: () => void;
}

export const SubmitPopup: FC<PropsWithChildren<SubmitPopupProps>> = ({
  children,
  success,
  closeHandler,
  ...rest
}) => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    closeHandler();
    navigate("/");
  };
  return (
    <>
      <div className={styles.overlay} />
      <div {...rest} className={cn(styles.container)}>
        <div className={styles.popup_inner}>
          {success && (
            <>
              <h2>Форма успешно отправлена</h2>
              <ReactSVG src={successIcon} />
              <Button id="button-to-main" onClick={goToMainPage}>
                На главную
              </Button>
            </>
          )}
          {!success && (
            <>
              <h2 className={styles.title_error}>Ошибка</h2>
              <ReactSVG src={errorIcon} />
              <div className={cn(styles.btn_error)}>
                <Button id="button-close" onClick={() => closeHandler()}>
                  Закрыть
                </Button>
              </div>
            </>
          )}
        </div>
        {children}
      </div>
    </>
  );
};
