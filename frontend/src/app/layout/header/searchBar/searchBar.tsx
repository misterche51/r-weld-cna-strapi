// "use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./searchBar.module.css";
import { PropsWithChildren } from "react";

const NAV_DATA = ["Продукция", "Документация", "Блог", "Контакты"];

// const CONTACTS_DATA = ["8 800 900-10-10", "info@r-weld.ru"];

export default function SearchBar({ children }: PropsWithChildren) {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder="Найти..."></input>
    </div>
  );
}
