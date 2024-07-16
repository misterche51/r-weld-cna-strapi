// "use client";
import { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./production.module.css";
import Container from "@/app/layout/container/container";
import SectionTitle from "../sectionTitle/sectionTitle";

import DB from "@/api/db";

export const List = () => {
  return (
    <ul className={styles.list}>
      {DB.catalog_categories.map(({ label, type, target }, i) => (
        <li key={i} className={styles.item}>
          <Link href={`${target}`}>
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
  );
};

export default function Production() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle variant="black" text="Продукция" />
        <List />
      </Container>
    </div>
  );
}
