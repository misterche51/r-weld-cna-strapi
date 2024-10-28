"use client";
import { PropsWithChildren } from "react";
import styles from "./container.module.css";

export default function Container({ children }: PropsWithChildren) {
  return <div className={styles.wrapper}>
    {children}
    <button className={styles.scroll_btn} onClick={(e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'})}}></button>
  </div>;
}
