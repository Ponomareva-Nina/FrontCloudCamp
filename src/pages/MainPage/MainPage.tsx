import { Profile } from "../../components";
import { Button } from "../../components/UI";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <Profile />
      <Button appearance="normal">Начать</Button>
    </div>
  );
};
