import { FC, ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./LoaderGuard.module.scss";

interface LoaderGuardProps {
  children: ReactNode;
  isLoading?: boolean;
  fallback?: ReactNode;
}

const DefaultSkeleton: FC = () => {
  return (
    <Skeleton
      count={3}
      baseColor="#0F1318"
      height={87}
      highlightColor="#0A0E12"
      className={styles.skeleton}
    />
  );
};

const LoaderGuard: FC<LoaderGuardProps> = ({
  children,
  isLoading,
  fallback = <DefaultSkeleton />,
}) => {
  return <>{isLoading ? fallback : children}</>;
};

export default LoaderGuard;
