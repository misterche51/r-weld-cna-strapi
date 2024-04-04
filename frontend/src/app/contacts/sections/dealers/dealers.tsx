import styles from "./dealers.module.css";
import DB from "@/api/db";
import Location from "./components/location";

const Region = ({ region, list }) => {
  return (
    <div className={styles.region}>
      <p className={styles.region__name}>{region}</p>
      <ul className={styles.region__list}>
        {list.map((props, i) => (
          <li key={i} className={styles.region__item}>
            <Location {...props} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Dealers() {
  return (
    <div className={styles.wrapper}>
      {/* поиск */}
      <ul className={styles.list}>
        {DB.dealers.map(({ region, list }) => (
          <li className={`${styles.list__item}`}>
            <Region region={region} list={list} />
          </li>
        ))}
      </ul>
    </div>
  );
}
