import styles from "./catalogItem.module.css";
import Image from "next/image";

type TCatalogItemProps = {
  label?: string;
  image?: string;
  withDrop?: boolean;
    imageStyle?: 'cover'|'contain';
};

export default function CatalogItem({
  label,
  image,
  withDrop = false,
  imageStyle = 'cover'
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
          style={{ objectFit: imageStyle }}
          priority
        />
      )}

      {label && <p className={styles.label}>{label}</p>}
    </div>
  );
}
