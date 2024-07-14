import Link from "next/link";
import styles from "./menu.module.css";
import Button from "@/app/shared/button/button";
import Drop from "./components/drop/drop";

import DB from "@/api/db";

export default function Menu() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.phone_wrapper}>
        <a className={styles.phone} href={DB.info.phone.href}>
          {DB.info.phone.label}
        </a>
      </div>
      <ul className={styles.list}>
        {DB.menu.map(({ label, target, menu }, i) => {
          return (
            <li className={styles.item} key={i}>
              {target && !menu && <Link href={`/${target}`}>{label}</Link>}
              {menu && <Drop label={label} menu={menu} target={target} />}
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
