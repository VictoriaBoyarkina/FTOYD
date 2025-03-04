import { FC, useState } from "react";
import styles from "./MatchInfo.module.scss";
import CommandIcon from "./CommandIcon";
import Status from "../Status";
import ArrowIcon from "./ArrowIcon";
import PlayerStatistic from "../PlayerStatistic";
import Result from "../Result";
import clsx from "clsx";
import { Match } from "../../types/match";

interface MatchInfoProps {
  match: Match;
}

const MatchInfo: FC<MatchInfoProps> = ({ match }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapse = () => {
    setIsCollapsed((isCollapsed) => !isCollapsed);
  };

  return (
    <div className={styles.container}>
      <div className={styles.match}>
        <div className={clsx(styles.team, styles.left)}>
          <CommandIcon />
          <span>{match.awayTeam.name}</span>
        </div>
        <div className={styles.score}>
          <span>
            {match.homeScore} : {match.awayScore}
          </span>
          <Status value={match.status} />
        </div>
        <div className={clsx(styles.team, styles.right)}>
          <span>{match.homeTeam.name}</span>

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
              {match.awayTeam.players?.map((player, index) => (
                <PlayerStatistic
                  key={index}
                  userName={player?.username}
                  result={player?.kills}
                />
              ))}
            </div>
            <Result
              points={match.awayTeam.points}
              killings={match.awayTeam.totalKills}
              position={match.awayTeam.place}
            />
          </div>
          <div className={styles.result}>
            <div className={styles.players}>
              {match.homeTeam.players?.map((player, index) => (
                <PlayerStatistic
                  key={index}
                  userName={player?.username}
                  result={player?.kills}
                />
              ))}
            </div>
            <Result
              points={match.homeTeam.points}
              killings={match.homeTeam.totalKills}
              position={match.homeTeam.place}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchInfo;
