import { useState } from "react";
import Link from "next/link";
import styles from "./select.module.css";
import { TMenuItem } from "../..";

export default function Select({ label, menu }: TMenuItem) {
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
          {menu.map(({ label, target }, i) => (
            <li className={styles.item} key={i}>
              <Link href={`/${target}`}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
