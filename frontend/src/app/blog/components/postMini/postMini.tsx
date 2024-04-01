// import myImageLoader from "../../../../../myImageLoader";
import styles from "./postMini.module.css";
import Image from "next/image";

export type TPostDataProps = {
  title: string;
  description: string;
  date: string;
  image: string;
};

export default function PostMini({
  title,
  description,
  date,
  image,
}: TPostDataProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image_box}>
        <Image
          className={styles.image}
          src={`/blog/${image}`}
          alt="элекментик"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.text_box}>
        <p className={styles.date}>{date}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
