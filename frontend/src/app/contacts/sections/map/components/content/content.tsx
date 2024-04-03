import styles from "./content.module.css";
import DB from "@/api/db";

export type TContentMapProps = {
  id: number;
};

export default function Content({ id }: TContentMapProps) {
  const { address, phone, promo, email, delivery } = DB.contacts[id];
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
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
      <div className={styles.map_wrapper}></div>
    </div>
  );
}
