import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";
import { GITHUB_LINK } from "../../constants/string-constants";
import githubLogo from "../../assets/github.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className="hidden">Task completed by:</p>
      <NavLink to={GITHUB_LINK} target="_blank" className="hidden">
        <div className={styles.github}>
          <ReactSVG src={githubLogo} />
          <span>Ponomareva-Nina</span>
        </div>
      </NavLink>
    </footer>
  );
};
