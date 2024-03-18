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

export default function About({ children }: PropsWithChildren) {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle variant="white" text={DATA.heading} />
        <p className={styles.content}>{DATA.content}</p>
        <p className={styles.footer}>{DATA.footer}</p>
      </Container>
    </div>
  );
}
