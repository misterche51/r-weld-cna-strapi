// "use client";
import { PropsWithChildren } from "react";
import Link from "next/link";
import styles from "./not-found.module.css";
import Button from "./shared/button/button";

export default function PageNotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Уважаемые посетители!</h2>
        <p className={styles.text}>
          Страница в разработке, но мы готовы к работе!
        </p>
        <p className={styles.text}>
          Наши сотрудники проконсультируют вас по любому вопросу.
        </p>
        <a href="tel:+79001001010" className={styles.phone}>
          {"8 (900)-100-10-10"}
        </a>
        <div className={styles.button}>
          <Link href="/">
            <Button text="На главную" />
          </Link>
        </div>
      </div>
    </div>
  );
}
