// "use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./searchBar.module.css";
import { PropsWithChildren, ReactNode } from "react";

const NAV_DATA = ["Продукция", "Документация", "Блог", "Контакты"];

// const CONTACTS_DATA = ["8 800 900-10-10", "info@r-weld.ru"];
type TSearchBarProps = {
  placeholder: string;
  icon?: ReactNode;
};
export default function SearchBar({ placeholder, icon }: TSearchBarProps) {
  return (
    <form className={styles.wrapper}>
      {icon && (
        <div className={`${styles.icon} ${styles[`icon--${icon}`]}`}></div>
      )}
      <input
        className={`${styles.input} ${icon && styles["input--with_icon"]}`}
        placeholder={placeholder}
      ></input>
      <button type="submit" className={styles.button}></button>
    </form>
  );
}
