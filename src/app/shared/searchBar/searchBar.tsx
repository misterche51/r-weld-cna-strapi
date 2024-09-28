"use client";

import styles from "./searchBar.module.css";
import { ReactNode, useState } from "react";
import { useRouter } from 'next/navigation';

type TSearchBarProps = {
  placeholder: string;
  icon?: ReactNode;
  onSearchStart?: (val: string) => void;
  // onChange: VoidFunction;
};
export default function SearchBar({
  placeholder,
  icon,
  onSearchStart,
}: TSearchBarProps) {
  const [value, setValue] = useState("");
  const router = useRouter()
  // @ts-expect-error
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSearchStart && onSearchStart(value);
    router.push(`/search?${value}`)
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
