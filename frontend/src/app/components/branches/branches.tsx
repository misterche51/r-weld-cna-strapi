// "use client";
import { PropsWithChildren } from "react";
import Image from "next/image";
import styles from "./branches.module.css";
import Container from "@/app/layout/container/container";
import SectionTitle from "../sectionTitle/sectionTitle";
import ContactForm from "../contactForm/contactForm";

const BRANCHES_DATA = [
  "Рязань",
  "Москва",
  "Санкт-Петербург",
  "Екатеринбург",
  "Красноярск",
];

export default function Branches({ children }: PropsWithChildren) {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle variant="black" text="Филиалы и склады" />
        <div className={styles.inner}>
          <div className={styles.image_box}>
            <Image
              className={styles.image}
              src="/box.jpg"
              alt="Брендированные коробки"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className={styles.text_box}>
            <p className={styles.description}>
              У нас обширная дилерская сеть во всех уголках России. Мы всегда
              готовы предложить различные методы расчёта и варианты доставки.
            </p>
            <ul className={styles.list}>
              {BRANCHES_DATA.map((city, idx) => (
                <li key={idx} className={styles.item}>
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ContactForm />
      </Container>
    </div>
  );
}
