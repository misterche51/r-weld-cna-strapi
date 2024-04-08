import { useState } from "react";
import Link from "next/link";
import styles from "./drop.module.css";
import { TMenuItem } from "../..";

export default function Drop({ label, menu }: TMenuItem) {
  return (
    <div className={styles.wrapper}>
      <>{label}</>
      <ul className={styles.list}>
        {menu!.map(({ label, target }, i) => (
          <li className={styles.item} key={i}>
            <Link href={`/${target}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
