import { useState } from "react";
import Link from "next/link";
import styles from "./menu.module.css";
import Button from "@/app/shared/button/button";
import Drop from "./components/drop/drop";

import { CATALOG_CATEGORIES_DB } from "@/api/catalog/categories";

type TLinkItem = {
  label: string;
  target: string;
};

export type TMenuItem = {
  label: string;
  target?: string;
  menu?: TLinkItem[];
};

const NAV_DATA: Array<TMenuItem> = [
  {
    label: "Продукция",
    menu: CATALOG_CATEGORIES_DB,
  },
  {
    label: "Документация",
    menu: [
      { label: "Скачать каталог 2023", target: "" },
      { label: "Скачать инструкцию", target: "" },
      { label: "Скачать руководство по эксплуатации", target: "" },
    ],
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

export default function Menu() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.phone_wrapper}>
        <a className={styles.phone} href="tel:88009001010">
          8 800 900-10-10
        </a>
      </div>
      <ul className={styles.list}>
        {NAV_DATA.map(({ label, target, menu }, i) => {
          return (
            <li className={styles.item} key={i}>
              {target && <Link href={`/${target}`}>{label}</Link>}
              {menu && <Drop label={label} menu={menu} />}
            </li>
          );
        })}
      </ul>
      <div className={styles.request_btn}>
        <Button text="Оставить заявку" />
      </div>
    </div>
  );
}
