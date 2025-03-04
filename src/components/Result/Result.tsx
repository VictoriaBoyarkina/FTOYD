import { FC } from "react";
import styles from "./Result.module.scss";
import { DEFAULT_SUBSTITUTE } from "../../utils/constants";

interface ResultProps {
  points: number | string;
  position: number | string;
  killings: number | string;
}

const Divider: FC = () => {
  return <span className={styles.divider}>|</span>;
};

const Result: FC<ResultProps> = ({ points, position, killings }) => {
  const pointsString = points === DEFAULT_SUBSTITUTE ? points : `+${points}`;

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <span className={styles.title}>Points:</span>
        <span>{pointsString}</span>
      </div>
      <Divider />
      <div className={styles.block}>
        <span className={styles.title}>Место:</span>
        <span>{position}</span>
      </div>
      <Divider />
      <div className={styles.block}>
        <span className={styles.title}>Всего убийств:</span>
        <span>{killings}</span>
      </div>
    </div>
  );
};

export default Result;
