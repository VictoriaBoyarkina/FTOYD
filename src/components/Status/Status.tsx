import { FC } from "react";
import styles from "./Status.module.scss";
import clsx from "clsx";
import { MatchStatus } from "../../types/match";

interface StatusProps {
  value: MatchStatus;
}

const statusMap = {
  [MatchStatus.ONGOING]: {
    className: styles.ongoing,
    text: "Live",
  },
  [MatchStatus.FINISHED]: {
    className: styles.finished,
    text: "Finished",
  },
  [MatchStatus.SCHEDULED]: {
    className: styles.scheduled,
    text: "Match Preparing",
  },
};

const Status: FC<StatusProps> = ({ value }) => {
  const text = statusMap[value].text;
  const className = statusMap[value].className;
  return <div className={clsx(styles.status, className)}>{text}</div>;
};

export default Status;
