import styles from "./info.module.css";
import DB from "@/api/db";
import { PropsWithChildren, useState } from "react";

export type TContentMapProps = {
  id: number;
};

export default function Info({ id }: PropsWithChildren<TContentMapProps>) {
  const { address, phone, promo, email, delivery } = DB.contacts[id];

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <p className={styles.address}>{address}</p>
        <a href={`tel:${phone.href}`} className={styles.phone}>
          {phone.label}
        </a>
        <a href={`mailto:${email}`} className={styles.email}>
          {email}
        </a>
        <p className={styles.delivery}>{delivery}</p>
        {promo && <p className={styles.promo}>{promo}</p>}
      </div>
    </div>
  );
}
