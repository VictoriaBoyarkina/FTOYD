import { FC } from "react";
import styles from "./Status.module.scss";
import clsx from "clsx";

interface StatusProps {
  value: "live" | "finished" | "waiting";
}

const statusMap = {
  live: {
    className: styles.live,
    text: "Live",
  },
  finished: {
    className: styles.finished,
    text: "Finished",
  },
  waiting: {
    className: styles.waiting,
    text: "Match Preparing",
  },
};

const Status: FC<StatusProps> = ({ value }) => {
  const text = statusMap[value].text;
  const className = statusMap[value].className;
  return <div className={clsx(styles.status, className)}>{text}</div>;
};

export default Status;
