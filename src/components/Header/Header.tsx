import { FC, memo } from "react";
import styles from "./Header.module.scss";
import Button from "../Button";
import Error from "../Error";
import Logo from "./Logo";

interface HeaderProps {
  isError: boolean;
  isLoading: boolean;
  onRefresh: () => void;
}

const Header: FC<HeaderProps> = memo(({ isError, isLoading, onRefresh }) => {
  return (
    <div className={styles.header}>
      <div>
        <Logo />
      </div>
      <div className={styles.refresh}>
        {isError && <Error />}
        <Button loading={isLoading} disabled={isLoading} onClick={onRefresh} />
      </div>
    </div>
  );
});

export default Header;
