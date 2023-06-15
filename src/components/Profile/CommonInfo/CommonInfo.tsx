import { Socials } from "../../../interfaces/user.interface";
import { useAppSelector } from "../../../redux/redux-hooks";
import styles from "./CommonInfo.module.scss";
import { Social } from "../../UI";

export const CommonInfo = () => {
  const user = useAppSelector((state) => state.user.entity);

  return (
    <div className={styles.container}>
      {user && (
        <>
          <div className={styles.avatar}>
            {user.name.slice(0, 1)}
            {user.sername.slice(0, 1)}
          </div>
          <div className={styles.user_info}>
            <h2>
              {user.name} {user.sername}
            </h2>
            <ul className={styles.socials_list}>
              {Object.keys(user.socials).map((social) => {
                return <Social name={social} link={user.socials[social as keyof Socials]} />;
              })}
            </ul>
          </div>
        </>
      )}
      {!user && <h2>Please sign in</h2>}
    </div>
  );
};
