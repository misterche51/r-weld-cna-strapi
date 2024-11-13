import Link from "next/link";
import styles from "./menu.module.css";
import Button from "@/app/shared/button/button";
import Drop from "./components/drop/drop";

import DB from "@/api/db";
import ContactForm from "@/app/shared/contactForm/contactForm";

export default function Menu({isOpened}: {isOpened:boolean}) {
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
      {isOpened && <div className={styles.form_wrapper}>
        <ContactForm />
      </div>}
    </div>
  );
}
