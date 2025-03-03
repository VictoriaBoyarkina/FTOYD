import { FC } from "react";
import styles from "./PlayerStatistic.module.scss";
import avatarUrl from "@/assets/avatar.png?url";

const Avatar: FC = () => {
  return <img src={avatarUrl} alt="avatar" className={styles.avatar} />;
};

export default Avatar;
