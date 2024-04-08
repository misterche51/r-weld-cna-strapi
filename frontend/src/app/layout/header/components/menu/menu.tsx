import { useState } from "react";
import Link from "next/link";
import styles from "./menu.module.css";
import Button from "@/app/shared/button/button";
import Drop from "./components/drop/drop";

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
    menu: [
      {
        label: "Ручные горелки",
        target: "hand_torches",
      },
      {
        label: "Роботизация и автоматизация",
        target: "robotization_and_automation",
      },
      {
        label: "Сварочная химия и аксессуары",
        target: "chemistry_and_accessories",
      },
      {
        label: "Оборудование и прочее",
        target: "equipment",
      },
    ],
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
