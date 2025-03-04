import { FC } from "react";
import styles from "./Main.module.scss";
import Header from "../Header";
import LoaderGuard from "../LoaderGuard/LoaderGuard";
import MatchInfo from "../MatchInfo";
import List from "../List/List";
import useFetchMatches from "../../hooks/useFetchMatches";
import { useDelayedValue } from "../../hooks/useDelayedValue";

const Main: FC = () => {
  const { data, isUninitialized, isError, isLoading, refresh } =
    useFetchMatches();

  const showLoader = useDelayedValue(isLoading || isUninitialized);

  const showError = useDelayedValue(isError);

  return (
    <div className={styles.layout}>
      <Header isError={showError} isLoading={showLoader} onRefresh={refresh} />
      <LoaderGuard isLoading={showLoader}>
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
