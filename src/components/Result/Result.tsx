import { FC } from "react";
import styles from "./Result.module.scss";

interface ResultProps {
  points: string;
  position: number;
  killings: number;
}

const Divider: FC = () => {
  return <span className={styles.divider}>|</span>;
};

const Result: FC<ResultProps> = ({ points, position, killings }) => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <span className={styles.title}>Points:</span>
        <span>{points}</span>
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
