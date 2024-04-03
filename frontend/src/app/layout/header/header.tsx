// "use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { PropsWithChildren } from "react";
import Container from "../container/container";
import SearchBar from "./searchBar/searchBar";

const NAV_DATA = [
  {
    label: "Продукция",
    target: "production",
  },
  {
    label: "Документация",
    target: "documentation",
  },

  {
    label: "Блог",
    target: "blog",
  },
  {
    label: "Контакты",
    target: "contacts",
  },
];

// const CONTACTS_DATA = ["8 800 900-10-10", "info@r-weld.ru"];

export default function Header({ children }: PropsWithChildren) {
  return (
    <header className={styles.wrapper}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <Image
                className={styles.logo}
                src="/logo.svg"
                alt="Логотип R-WELD"
                width={195}
                height={104}
                priority
              />
            </Link>
          </div>
          <div className={styles.nav_box}>
            <ul className={styles.navigation}>
              {NAV_DATA.map(({ label, target }, i) => (
                <li className={styles.item} key={i}>
                  <Link href={`/${target}`}>{label}</Link>
                </li>
              ))}
            </ul>
            <SearchBar />
          </div>
          <div className={styles.intaractions_box}>
            <a className={styles.phone} href="tel:88009001010">
              8 800 900-10-10
            </a>
            <button className={styles.button_to_form}>Оставить заявку</button>
          </div>
        </div>
      </Container>
    </header>
  );
}
