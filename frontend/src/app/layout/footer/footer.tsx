// "use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import { PropsWithChildren } from "react";
import Container from "../container/container";

const SITE_MAP_DATA = [
  "Продукция",
  "Документация",
  "Блог",
  "Филиалы и склады",
  "Дилеры",
  "Контакты",
];

const CONTACTS_DATA = ["8 800 900-10-10", "info@r-weld.ru"];

export default function Footer({ children }: PropsWithChildren) {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.info_box}>
            <div className={styles.company_info}>
              <div className={styles.logo}>
                <Link href={"/"}>
                  <Image
                    className={styles.logo}
                    src="/white-logo.svg"
                    alt="Логотип R-WELD"
                    width={148}
                    height={78}
                    priority
                  />
                </Link>
              </div>
              <p className={styles.description}>
                Российский производитель и поставщик горелок для MIG и TIG
                сварки
              </p>
            </div>

            <p className={styles.address}>
              ООО «Р-ВЕЛД» 390525 Рязанская обл., Рязанский муниципальный район,
              с. Поляны, ул. Новая, строение 15
            </p>
          </div>
          <div className={styles.links_box}>
            <div className={styles.site_map}>
              <p className={styles.site_map__heading}>Разделы</p>
              <ul className={styles.site_map__list}>
                {SITE_MAP_DATA.map((label, i) => (
                  <li className={styles.site_map__item} key={i}>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.contacts}>
              <p className={styles.contacts__heading}>Контакты</p>
              <ul className={styles.contacts__list}>
                {CONTACTS_DATA.map((label, i) => (
                  <li className={styles.contacts__item} key={i}>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
