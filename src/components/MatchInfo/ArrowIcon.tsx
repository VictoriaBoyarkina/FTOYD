import { FC } from "react";
import styles from "./MatchInfo.module.scss";

type ArrowIconProps = {
  type?: "up" | "down";
} & React.SVGProps<SVGSVGElement>;

const ArrowIcon: FC<ArrowIconProps> = ({ type = "down" }) => {
  return (
    <svg
      width="16"
      height="9"
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles[type]}
    >
      <path
        d="M1 8L8 1L15 8"
        stroke="#FAFAFA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
