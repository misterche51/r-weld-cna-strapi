import { useState } from "react";
import Link from "next/link";
import styles from "./select.module.css";
// import { TMenuItem } from "../..";
import { TTorcheSubCategoryData } from "@/api/db";

type TSelectProps = {
  label: string;
  options: {
    label: string;
    target: string;
  }[];
};

export default function Select({ label, options }: TSelectProps) {
  const [isDropped, setIsDropped] = useState(false);
  const onDropHover = () => setIsDropped(true);
  const onDropUnHover = () => setIsDropped(false);
  return (
    <div
      className={styles.wrapper}
      onMouseOver={onDropHover}
      onMouseLeave={onDropUnHover}
    >
      <span className={styles.label}>{label}</span>
      <div
        className={`${styles.dropdown} ${
          isDropped ? styles["dropdown--dropped"] : ""
        }`}
      >
        <ul className={styles.list}>
          {options.map(({ label, target }, i) => (
            <li className={styles.item} key={i}>
              <Link href={`/production/hand_torches/${[target]}`}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
