import styles from "./item.module.css";
import Image from "next/image";

// @ts-expect-error
const Item = ({ name, image, info }) => {
  const img = image === "" ? "binzel.jpg" : image;
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>
        <p className={styles.label__text}>{name}</p>
      </div>

      <div className={styles.image}>
        <Image
          className={styles.image__pic}
          src={`/weld_chemistry/${img}`}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className={styles.info}>{info}</div>
    </div>
  );
};
export default Item;
