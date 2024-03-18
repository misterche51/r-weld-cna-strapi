// "use client";
import { PropsWithChildren } from "react";
import styles from "./contactForm.module.css";

export default function ContactForm({ children }: PropsWithChildren) {
  return (
    <form className={styles.wrapper}>
      <div className={styles.inner}>
        <p className={styles.cta}>
          Оставьте номер телефона, мы ответим на все ваши вопросы и оформим
          заказ
        </p>
        <div className={styles.components}>
          <input
            type="phone"
            className={styles.input}
            placeholder="Введите номер телефона"
          ></input>
          <button className={styles.button}>Оставить заявку</button>
        </div>
      </div>
    </form>
  );
}
