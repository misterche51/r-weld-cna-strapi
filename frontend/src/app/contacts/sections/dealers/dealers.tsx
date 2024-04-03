import styles from "./dealers.module.css";
import DB from "@/api/db";
import Item from "./components/item";

export default function Dealers() {
  return (
    <div className={styles.wrapper}>
      {/* поиск */}
      <ul className={styles.regions_list}>
        {DB.dealers.map(({ region, list }) => (
          <li className={`${styles.regions_list__item} ${styles.zone}`}>
            <p className={styles.zone__name}>{region}</p>
            <ul className={styles.zone__list}>
              {list.map((props, i) => (
                <li key={i} className={styles.zone__item}>
                  <Item {...props} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
