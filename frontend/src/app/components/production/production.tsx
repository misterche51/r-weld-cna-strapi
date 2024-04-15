// "use client";
import { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./production.module.css";
import Container from "@/app/layout/container/container";
import SectionTitle from "../sectionTitle/sectionTitle";

const PRODUCTION_LIST_DATA = [
  {
    label: "Ручные горелки",
    type: "hand",
  },
  {
    label: "Роботизация и автоматизация",
    type: "robots",
  },
  {
    label: "Сварочная химия и аксессуары",
    type: "materials",
    target: "chemistry",
  },
  {
    label: "Оборудование и прочее",
    type: "others",
    target: "equipment",
  },
];

export default function Production({ children }: PropsWithChildren) {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle variant="black" text="Продукция" />
        <ul className={styles.list}>
          {PRODUCTION_LIST_DATA.map(({ label, type, target }, i) => (
            <li key={i} className={styles.item}>
              <Link href={`/${target}`}>
                <>
                  <Image
                    className={styles.image}
                    src={`/${type}.jpg`}
                    alt="label"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <p className={styles.label}>{label}</p>
                </>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
