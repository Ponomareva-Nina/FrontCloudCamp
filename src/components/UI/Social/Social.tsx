import { FC, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
import folderIcon from "../../../assets/folder_icon.svg";
import styles from "./Social.module.scss";

interface SocialProps {
  name: string;
  link: string;
}

export const Social: FC<PropsWithChildren<SocialProps>> = ({ children, name, link, ...rest }) => {
  return (
    <NavLink to={link} target="_blank">
      <li {...rest} className={styles.social}>
        <ReactSVG src={folderIcon} />
        {name}
      </li>
    </NavLink>
  );
};
