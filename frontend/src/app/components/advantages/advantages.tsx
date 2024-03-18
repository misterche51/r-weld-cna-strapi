// "use client";
import { PropsWithChildren } from "react";
import styles from "./advantages.module.css";
import Container from "@/app/layout/container/container";
import SectionTitle from "../sectionTitle/sectionTitle";
const ADVANTAGES_LIST_DATA = [
  {
    label: "Надёжность",
    description:
      "Мы работаем в соответствии с международными стандартами по последним тенденциям мира сварки. Все оборудование R-Weld проходит тщательное тестирование, что подтверждает его долговечность и надёжность.",
  },
  {
    label: "Поддержка",
    description:
      "Наш технический персонал выезжает на предприятия и проводит консультации по правильной эксплуатации нашей сварочной техники. В случае поломок мы можем заменить или отремонтировать оборудование на нашем заводе.",
  },
  {
    label: "Доступность",
    description:
      "Собственный завод в Рязани, сеть филиалов и более 300 дистрибьюторов во всех регионах РФ позволяет нам доставлять оборудование и необходимые аксессуары в кратчайшие сроки.",
  },
  {
    label: "Открытость",
    description:
      "Мы регулярно проводим дни открытых дверей на заводе R-Weld в Рязани и будем рады организовать вам экскурсию по предварительной договорённости. Наша команда профессионалов ответит на все ваши вопросы и поможет решить любую задачу вашего производства.",
  },
];

export default function Advantages({ children }: PropsWithChildren) {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle variant="black" text="Наши преимущества" />
        <ul className={styles.list}>
          {ADVANTAGES_LIST_DATA.map(({ label, description }, i) => (
            <li key={i} className={styles.item}>
              <p className={styles.item__label}>{label}</p>
              <p className={styles.item__description}>{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
