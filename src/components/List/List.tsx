import { ReactNode } from "react";
import styles from "./List.module.scss";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, key: number) => ReactNode;
}

const List = <T,>({ items, renderItem }: ListProps<T>) => {
  return <ul className={styles.header}>{items.map(renderItem)}</ul>;
};

export default List;
