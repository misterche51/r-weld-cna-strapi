import { useState } from "react";
import Link from "next/link";
import styles from "./drop.module.css";
import { TMenuItem } from "../..";

export default function Drop({ label, menu }: TMenuItem) {
  const [isDropped, setIsDropped] = useState(false);
  const onDropHover = () => setIsDropped(true);
  const onDropUnHover = () => setIsDropped(false);
  return (
    <div
      className={styles.wrapper}
      onMouseOver={onDropHover}
      onMouseLeave={onDropUnHover}
    >
      <>{label}</>
      <div 
        className={`${styles.dropdown} ${
          isDropped ? styles["dropdown--dropped"] : ""
        }`}
      >
        <button className={styles.button_backward} onClick={onDropUnHover}>
          Назад
        </button>
        <ul className={styles.list} >
          {menu!.map(({ label, target }, i) => (
            <li className={styles.item} key={i}>
              <Link href={`/${target}`}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
