import { FC, PropsWithChildren } from "react";
import { Footer, Header } from "../components";

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
