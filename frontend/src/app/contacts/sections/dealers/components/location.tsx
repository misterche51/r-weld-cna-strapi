import styles from "./location.module.css";
import { TDealerItem } from "@/api/dealers/declarations";

export default function Location({
  name,
  phone = "-",
  address = "-",
  email = "-",
  site = "-",
}: TDealerItem) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.name}>{name}</p>
      <div className={styles.info}>
        <p className={`${styles.phone} ${styles.el}`}>{phone}</p>
        <p className={`${styles.email} ${styles.el}`}>{email}</p>
        <p className={`${styles.address} ${styles.el}`}>{address}</p>
        <p className={`${styles.site} ${styles.el}`}>{site}</p>
      </div>
    </div>
  );
}
