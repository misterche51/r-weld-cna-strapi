// "use client";
import { PropsWithChildren } from "react";
import styles from "./about.module.css";
import Container from "@/app/layout/container/container";
import SectionTitle from "../sectionTitle/sectionTitle";

const DATA = {
  heading: "О компании",
  content:
    "«R-Weld» - один из лидеров среди российских производителей и поставщиков профессионального оборудования и аксессуаров для MIG и TIG сварки. Более 15 лет мы специализируемся на комплексных решениях для промышленных предприятий. Наша команда проводит индивидуальный подбор, настройку и тестирование оборудования непосредственно на предприятии клиента.",
  footer:
    "Наша цель — стать надёжным партнёром вашего производства на долгие годы.",
};

export default function ContactForm({ children }: PropsWithChildren) {
  return (
    <form className={styles.form}>
      <p className={styles.cta}>
        Оставьте номер телефона, мы ответим на все ваши вопросы и оформим заказ
      </p>
      <div className={styles.components}>
        <input
          type="phone"
          className={styles.input}
          placeholder="Введите номер телефона"
        ></input>
        <button className={styles.button}></button>
      </div>
    </form>
  );
}
