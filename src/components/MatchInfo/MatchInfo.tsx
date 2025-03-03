import { FC, useState } from "react";
import styles from "./MatchInfo.module.scss";
import CommandIcon from "./CommandIcon";
import Status from "../Status";
import ArrowIcon from "./ArrowIcon";
import PlayerStatistic from "../PlayerStatistic";
import Result from "../Result";
import clsx from "clsx";

interface MatchInfoProps {}

const MatchInfo: FC<MatchInfoProps> = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapse = () => {
    setIsCollapsed((isCollapsed) => !isCollapsed);
  };

  return (
    <div className={styles.container}>
      <div className={styles.match}>
        <div className={clsx(styles.team, styles.left)}>
          <CommandIcon />
          <span>Command #1</span>
        </div>
        <div className={styles.score}>
          <span>2 : 4</span>
          <Status value="live" />
        </div>
        <div className={clsx(styles.team, styles.right)}>
          <span>Command #1</span>
          <CommandIcon />
          <div className={styles.arrow} onClick={handleCollapse}>
            <ArrowIcon type={isCollapsed ? "down" : "up"} />
          </div>
        </div>
      </div>
      {!isCollapsed && (
        <div className={styles.details}>
          <div className={styles.result}>
            <div className={styles.players}>
              <PlayerStatistic userName="User1" result={4} />
              <PlayerStatistic userName="User1" result={4} />
              <PlayerStatistic userName="User1" result={4} />
            </div>
            <Result points="+50" killings={7} position={6} />
          </div>
          <div className={styles.result}>
            <div className={styles.players}>
              <PlayerStatistic userName="User1" result={4} />
              <PlayerStatistic userName="User1" result={4} />
              <PlayerStatistic userName="User1" result={4} />
            </div>
            <Result points="+50" killings={7} position={6} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchInfo;
