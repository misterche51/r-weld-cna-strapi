import styles from "./item.module.css";
import { TTorchesItem } from "@/api/catalog/torches/declarations";
import Image from "next/image";


type TTorchesItemParams = Omit<TTorchesItem, 'name'|'image'>
const LABELS_DICT:TTorchesItemParams  = {
  co2: "CO2",
  gas: "Газ.смесь М21",
  pv: "ПВ", 
  dc: "DC",
  ac: "AC",
  wire: "Проволока",
  electrode: 'Электрод',
  flex: 'Возм. гибкой головки',
} as const;


const Row = ({
  label,
  value,
}: {
  label: keyof typeof LABELS_DICT,
  value: string;
}) => (
  <div className={styles.row}>
    <p className={styles.row__label}>{LABELS_DICT[label]}</p>
    <span className={styles.row__divider}></span>
    <p className={styles.row__value}>{value}</p>
  </div>
);

const Item = ({ name, image, ...params }: TTorchesItem) => {
  const rows: Array<keyof TTorchesItemParams> = [];
  for (let key in params as TTorchesItemParams) {
    rows.push(key as keyof TTorchesItemParams)
  }
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
         typeof params[label] === 'string' ?  
          <Row key={i} label={label} value={params[label]!} /> 
          : null
        ))}
      </div>
    </div>
  );
};
export default Item;  
