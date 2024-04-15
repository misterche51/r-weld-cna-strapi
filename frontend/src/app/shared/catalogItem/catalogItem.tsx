import styles from "./catalogItem.module.css";
import Image from "next/image";

type TCatalogItemProps = {
  label: string;
  image?: string;
};

export default function CatalogItem({ label, image }: TCatalogItemProps) {
  return (
    <div className={styles.wrapper}>
      {image && (
        <Image
          className={styles.image}
          src={`/${image}.jpg`}
          alt="label"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      )}

      <p className={styles.label}>{label}</p>
    </div>
  );
}
