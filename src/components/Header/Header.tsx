import { FC } from "react";
import styles from "./Header.module.scss";
import Button from "../Button";
import Error from "../Error";
import Logo from "./Logo";

interface HeaderProps {
  isError: boolean;
  isLoading: boolean;
}

const Header: FC<HeaderProps> = ({ isError, isLoading }) => {
  return (
    <div className={styles.header}>
      <div>
        <Logo />
      </div>
      <div className={styles.refresh}>
        {isError && <Error />}
        <Button loading={isLoading} />
      </div>
    </div>
  );
};

export default Header;
