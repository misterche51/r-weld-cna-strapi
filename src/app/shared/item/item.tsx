import styles from "./item.module.css";
import Image from "next/image";
import { TImageData } from "@/api/catalog/chemistry/declarations";


type TItemProps = {
  name: string,
  image: string|TImageData,
  info?: string,
}

export const Item = ({ name, image, info }: TItemProps) => {

  //todo: сделать заглушку
  // const img = image === "" || image?.src === '' ? "binzel.jpg" : image;
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>
        <p className={styles.label__text}>{name}</p>
      </div>

      <div className={styles.image}>
        <Image
          className={styles.image__pic}
          src={typeof image === 'string' ? image : image.src}
          alt={typeof image === 'string' ? name : image.alt}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      {info && <div className={styles.info}>{info}</div>}
    </div>
  );
};
