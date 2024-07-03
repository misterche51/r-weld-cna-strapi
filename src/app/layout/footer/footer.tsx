// "use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import { PropsWithChildren } from "react";
import Container from "../container/container";
import DB from "@/api/db";

const SITE_MAP_DATA = [
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


const Logo = () => (
  <div className={styles.logo}>
    <Link href={"/"}>
      <Image
        className={styles.logo__img}
        src="/white-logo.svg"
        alt="Логотип R-WELD"
        width={148}
        height={78}
        priority
      />
    </Link>
  </div>
);


const SiteMap = () => (
  <div className={styles.site_map}>
    <p className={styles.site_map__heading}>Разделы</p>
    <ul className={styles.site_map__list}>
      {SITE_MAP_DATA.map(({ label, target }, i) => (
        <li className={styles.site_map__item} key={i}>
          <Link href={`/${target}`}>{label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Contacts = () => (
  <div className={styles.contacts}>
    <p className={styles.contacts__heading}>Контакты</p>
    <ul className={styles.contacts__list}>
      {[DB.info.phone, DB.info.email].map(({href, label}) => (
        <li className={styles.contacts__item} key={href}>
           <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Address = () => (
  <p className={styles.address}>
    {DB.info.address}
  </p>
);

export default function Footer({ children }: PropsWithChildren) {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.info_box}>
            <div className={styles.company_info}>
              <Logo />
              <p className={styles.description}>
                {DB.info.description}
              </p>
            </div>
            <div className={styles["address_wrapper--desk"]}>
              <Address />
            </div>
          </div>
          <div className={styles.links_box}>
            <SiteMap />
            <Contacts/>
          </div>
          <div className={styles["address_wrapper--mob"]}>
            <Address />
          </div>
        </div>
      </Container>
    </footer>
  );
}
