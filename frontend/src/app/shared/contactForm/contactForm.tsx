// "use client";
import { TContactFormProps } from "./declarations";
import styles from "./contactForm.module.css";

export default function ContactForm({ variant = "dark" }: TContactFormProps) {
  return (
    <form className={`${styles[`wrapper--${variant}`]} ${styles.wrapper}`}>
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
          <button
            className={`${styles[`button--${variant}`]} ${styles.button}`}
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </form>
  );
}
