import styles from "./info.module.css";
import DB from "@/api/db";
import { PropsWithChildren } from "react";

export type TContentMapProps = {
  id: number;
};

export default function Info({ id }: PropsWithChildren<TContentMapProps>) {
  const { address, phones, promo, email, delivery } = DB.contacts[id];

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <p className={`${styles.address} ${styles.el}`}>{address}</p>
        <>
          {phones.map(({ href, label }, i) =>
            href ? (
              <a
                href={`tel:${href}`}
                key={i}
                className={`${styles.phone} ${styles.el}`}
              >
                {label}
              </a>
            ) : (
              <p key={i} className={`${styles.el}`}>
                {label}
              </p>
            )
          )}
        </>

        <a href={`mailto:${email}`} className={`${styles.email} ${styles.el}`}>
          {email}
        </a>
        {delivery && (
          <p className={`${styles.delivery} ${styles.el}`}>{delivery}</p>
        )}
        {promo && <p className={styles.promo}>{promo}</p>}
      </div>
    </div>
  );
}
