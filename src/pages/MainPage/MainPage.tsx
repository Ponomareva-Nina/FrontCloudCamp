import { NavLink } from "react-router-dom";
import { Profile } from "../../components";
import { Button } from "../../components/UI";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <Profile />
      <NavLink to="/create">
        <Button id="button-start" appearance="normal">
          Начать
        </Button>
      </NavLink>
    </div>
  );
};
