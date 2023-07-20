import { Profile } from "../../components";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <Profile />
    </div>
  );
};
