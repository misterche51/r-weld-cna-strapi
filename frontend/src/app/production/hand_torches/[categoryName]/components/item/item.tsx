import Image from "next/image";
import styles from "./item.module.css";
import { TTorchesItem } from "@/api/db";

const LABELS_DICT = {
  co2: "CO2",
  gas: "Газовая смесь М21",
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
  <div className={styles.info__row}>
    <p>{LABELS_DICT[label]}</p>
    <span></span>
    <p>{value}</p>
  </div>
);

const Item = ({ name, image, co2, gas, wire, pv }: TTorchesItem) => {
  const rows = ["co2", "gas", "pv", "wire"] as const;
  const params = [co2, gas, pv, wire];
  return (
    <div>
      <p>{name}</p>
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
