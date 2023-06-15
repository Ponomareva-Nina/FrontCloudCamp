import { CommonInfo } from "./CommonInfo/CommonInfo";
import { ContactsForm } from "./ContactsForm/ContactsForm";
import styles from "./Profile.module.scss";

export const Profile = () => {
  return (
    <div className={styles.container}>
      <CommonInfo />
      <ContactsForm />
    </div>
  );
};
