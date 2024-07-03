import { useState } from "react";
import Link from "next/link";
import styles from "./menu.module.css";
import Button from "@/app/shared/button/button";
import Drop from "./components/drop/drop";

import { CATALOG_CATEGORIES_DB } from "@/api/catalog/categories";
import { TDownloadsDB } from "@/api/documentation/declarations";

import DB from "@/api/db";

type TLinkItem = {
  label: string;
  target: string;
};

export type TMenuItem = {
  label: string;
  target?: string;
  menu?: {
    type: 'link'|'download';
    list: TLinkItem[]|TDownloadsDB};
};

const NAV_DATA: Array<TMenuItem> = [
  {
    label: "Продукция",
    menu: {
      type:'link',
      list: CATALOG_CATEGORIES_DB
    },
  },
  {
    label: "Документация",
    menu: {
      type: 'download',
      list: DB.downloads
    },
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
        <a className={styles.phone} href={DB.info.phone.href}>
          {DB.info.phone.label}
        </a>
      </div>
      <ul className={styles.list}>
        {NAV_DATA.map(({ label, target, menu }, i) => {
          return (
            <li className={styles.item} key={i}>
              {target && <Link href={`/${target}`}>{label}</Link>}
              {menu && <Drop label={label} menu={menu}  />}
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
