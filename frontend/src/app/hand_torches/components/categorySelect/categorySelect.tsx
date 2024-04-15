import styles from "./categorySelect.module.css";
import Image from "next/image";
import CatalogItem from "@/app/shared/catalogItem/catalogItem";
import Select from "./components/select/select";

type TCatalogItemProps = {
  label: string;
  image?: string;
  drops: any;
};

export default function CategorySelect({
  label,
  image,
  drops,
}: TCatalogItemProps) {
  return (
    <div className={styles.wrapper}>
      <CatalogItem label={label} image={image} />
      <ul className={styles.drops}>
        {drops.map(({ label, menu }, i) => (
          <li key={i} className={styles.drops__item}>
            <Select label={label} menu={menu} />
          </li>
        ))}
      </ul>
    </div>
  );
}
