import styles from "./categorySelect.module.css";
import CatalogItem from "@/app/shared/catalogItem/catalogItem";
import Select from "./components/select/select";
import { TTorchesClass } from "@/api/catalog/torches/declarations";


type TCatalogItemProps = TTorchesClass;

export default function CategorySelect({
  label,
  image,
  categories,
}: TCatalogItemProps) {
  const preparedDrops = Object.values(categories);
  const preparedLabels = Object.keys(categories) ;
  return (
    <div className={styles.wrapper}>
      <CatalogItem image={image} withDrop={true} />
      <h3 className={styles.label}>{label}</h3>
      <ul className={styles.drops}>
        {preparedLabels.map((label, i) => (
          <li key={i} className={styles.drops__item}>
            {/* @ts-expect-error */}
            <Select label={label} options={preparedDrops[i]} />
          </li>
        ))}
      </ul>
    </div>
  );
}
