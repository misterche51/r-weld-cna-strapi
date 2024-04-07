import { useState } from "react";
import Link from "next/link";
import styles from "./menu.module.css";
import Button from "@/app/shared/button/button";

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

export default function Menu() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.phone_wrapper}>
        <a className={styles.phone} href="tel:88009001010">
          8 800 900-10-10
        </a>
      </div>
      <ul className={styles.list}>
        {NAV_DATA.map(({ label, target }, i) => (
          <li className={styles.item} key={i}>
            <Link href={`/${target}`}>{label}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.request_btn}>
        <Button text="Оставить заявку" />
      </div>
    </div>
  );
}
