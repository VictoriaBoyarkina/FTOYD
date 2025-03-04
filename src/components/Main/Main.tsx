import { FC } from "react";
import styles from "./Main.module.scss";
import Header from "../Header";
import LoaderGuard from "../LoaderGuard/LoaderGuard";
import MatchInfo from "../MatchInfo";
import List from "../List/List";
import useFetchMatches from "../../hooks/useFetchMatches";

const Main: FC = () => {
  const { data, isUninitialized, isError, isLoading, refresh } =
    useFetchMatches();

  return (
    <div className={styles.layout}>
      <Header
        isError={isError}
        isLoading={isLoading || isUninitialized}
        onRefresh={refresh}
      />
      <LoaderGuard isLoading={isLoading || isUninitialized}>
        {data && (
          <List
            items={data}
            renderItem={(item, key) => <MatchInfo match={item} key={key} />}
          />
        )}
      </LoaderGuard>
    </div>
  );
};

export default Main;
