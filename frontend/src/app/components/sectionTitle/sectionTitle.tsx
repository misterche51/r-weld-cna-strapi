// "use client";
import styles from "./sectionTitle.module.css";
import { TSectionTitleProps } from "./declarations";

export default function SectionTitle({ variant, text }: TSectionTitleProps) {
  return (
    <h2 className={`${styles[`title--${variant}`]} ${styles.title}`}>{text}</h2>
  );
}
