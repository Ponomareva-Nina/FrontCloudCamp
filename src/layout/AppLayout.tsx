import { FC, PropsWithChildren } from "react";
import styles from "./AppLayout.module.scss";
import { Footer, Header } from "../components";

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
