import styles from "./item.module.css";
import { TTorchesItem } from "@/api/catalog/torches/declarations";
import Image from "next/image";

const LABELS_DICT = {
  co2: "CO2",
  gas: "Газ.смесь М21",
  pv: "ПВ",
  wire: "Проволока",
};

const Row = ({
  label,
  value,
}: {
  label: "co2" | "gas" | "pv" | "wire";
  value: string;
}) => (
  <div className={styles.row}>
    <p className={styles.row__label}>{LABELS_DICT[label]}</p>
    <span className={styles.row__divider}></span>
    <p className={styles.row__value}>{value}</p>
  </div>
);

const Item = ({ name, image, co2, gas, wire, pv }: TTorchesItem) => {
  const rows = ["co2", "gas", "pv", "wire"] as const;
  const params = [co2, gas, pv, wire];
  const img = image === "" ? "mb_evo_15.png" : image;
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>{name}</p>
      <div className={styles.image}>
        <Image
          className={styles.image__pic}
          src={`/torches/${img}`}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className={styles.info}>
        <p className={styles.info__title}>Нагрузка:</p>
        {rows.map((label, i) => (
          <Row key={i} label={label} value={params[i]} />
        ))}
      </div>
    </div>
  );
};
export default Item;
