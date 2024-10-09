"use client";

import styles from "./searchBar.module.css";
import { ReactNode, useState } from "react";

type TSearchBarProps = {
  placeholder: string;
  icon?: ReactNode;
  onSearchStart?: (val: string) => void;
};
export default function SearchBar({
  placeholder,
  icon,
  onSearchStart,
}: TSearchBarProps) {
  const [value, setValue] = useState("");
  // @ts-expect-error
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSearchStart && onSearchStart(value);
  };
  return (
    <form className={styles.wrapper} onSubmit={onSubmitHandler}>
      {icon && (
        <div className={`${styles.icon} ${styles[`icon--${icon}`]}`}></div>
      )}
      <input
        className={`${styles.input} ${icon && styles["input--with_icon"]}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue((val) => e.target.value)}
      ></input>
      <button type="submit" className={styles.button}></button>
    </form>
  );
}
