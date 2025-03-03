import { FC } from "react";
import styles from "./Error.module.scss";
import ErrorIcon from "./ErrorIcon";

const Error: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <ErrorIcon />
      </div>
      <span>Ошибка: не удалось загрузить информацию</span>
    </div>
  );
};

export default Error;
