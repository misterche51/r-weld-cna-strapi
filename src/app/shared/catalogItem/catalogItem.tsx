import styles from "./catalogItem.module.css";
import Image from "next/image";

type TCatalogItemProps = {
  label?: string;
  image?: string;
  withDrop?: boolean;
};

export default function CatalogItem({
  label,
  image,
  withDrop = false,
}: TCatalogItemProps) {
  return (
    <div
      className={`${styles.wrapper} ${
        withDrop ? "" : styles["wrapper--with-hover"]
      }`}
    >
      {image && (
        <Image
          className={styles.image}
          src={`/${image}`}
          alt="label"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      )}

      {label && <p className={styles.label}>{label}</p>}
    </div>
  );
}
