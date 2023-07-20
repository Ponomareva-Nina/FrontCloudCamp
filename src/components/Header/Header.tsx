import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <h1 className={styles.hidden}>FrontCloudCamp test task</h1>
    </header>
  );
};
