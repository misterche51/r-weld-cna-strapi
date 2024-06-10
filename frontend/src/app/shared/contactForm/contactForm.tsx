// "use client";
import styles from "./contactForm.module.css";
import { TContactFormProps } from "./declarations";
import Button from "../button/button";

export default function ContactForm({ variant = "dark" }: TContactFormProps) {
  const buttonTheme = variant === "dark" ? "light" : "dark";
  return (
    <form className={`${styles[`wrapper--${variant}`]} ${styles.wrapper}`} id='contact-form'>
      <div className={styles.inner}>
        <p className={`${styles[`cta--${variant}`]} ${styles.cta}`}>
          Оставьте номер телефона, мы ответим на все ваши вопросы и оформим
          заказ
        </p>
        <div className={styles.components}>
          <input
            type="phone"
            className={`${styles[`input--${variant}`]} ${styles.input}`}
            placeholder="Введите номер телефона"
          ></input>
          <div className={styles.button}>
            <Button variant={buttonTheme} text="Оставить заявку" />
          </div>
        </div>
      </div>
    </form>
  );
}
