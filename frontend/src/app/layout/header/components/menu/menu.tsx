import { useState } from "react";
import Link from "next/link";
import styles from "./menu.module.css";
import MenuButton from "./components/menuButton/menuButton";

const NAV_DATA = [
  {
    label: "Продукция",
    target: "production",
  },
  {
    label: "Документация",
    target: "documentation",
  },
  {
    label: "Блог",
    target: "blog",
  },
  {
    label: "Контакты",
    target: "contacts",
  },
];

type TMenuProps = { isOpened: boolean };
export default function Menu({ isOpened }: TMenuProps) {
  return (
    <>
      <ul className={`${styles.list} ${isOpened && styles["list--opened"]}`}>
        {NAV_DATA.map(({ label, target }, i) => (
          <li className={styles.item} key={i}>
            <Link href={`/${target}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
