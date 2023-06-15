import { Button } from "../../components/UI";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <>
      <div className={styles.container}>Profile Component</div>
      <Button appearance="normal">Начать</Button>
    </>
  );
};
