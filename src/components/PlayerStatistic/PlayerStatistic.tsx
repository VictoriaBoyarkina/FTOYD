import { FC } from "react";
import Avatar from "./Avatar";
import styles from "./PlayerStatistic.module.scss";

interface PlayerStatisticProps {
  userName: string;
  result: number | string;
}

const PlayerStatistic: FC<PlayerStatisticProps> = ({ userName, result }) => {
  return (
    <div className={styles.container}>
      <div className={styles.player}>
        <Avatar />
        <span>{userName}</span>
      </div>
      <div className={styles.statistic}>
        <span className={styles.title}>Убийств:</span>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default PlayerStatistic;
