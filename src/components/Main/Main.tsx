import { FC } from "react";
import styles from "./Main.module.scss";
import Header from "../Header";
import LoaderGuard from "../LoaderGuard/LoaderGuard";
import MatchInfo from "../MatchInfo";
import List from "../List/List";

const data = [1, 2, 3, 4];

const Main: FC = () => {
  return (
    <div className={styles.layout}>
      <Header isError isLoading />
      <LoaderGuard isLoading>
        <List items={data} renderItem={(item) => <MatchInfo match={item} />} />
      </LoaderGuard>
    </div>
  );
};

export default Main;
