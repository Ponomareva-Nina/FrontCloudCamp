import { CommonInfo } from "./CommonInfo/CommonInfo";
import { ContactForm } from "./ContactForm/ContactForm";
import styles from "./Profile.module.scss";

export const Profile = () => {
  return (
    <div className={styles.container}>
      <CommonInfo />
      <ContactForm />
    </div>
  );
};
