// import myImageLoader from "../../../../../myImageLoader";
import styles from "./article.module.css";
import Image from "next/image";
import Heading from "@/app/shared/heading/heading";

export type TPostDataProps = {
  title: string;
  articleTitle?: string;
  shortDescription: string;
  fullDescription?: string;
  date: string;
  image: string;
};

export default function Article({
  title,
  articleTitle = title,
  shortDescription,
  fullDescription = shortDescription,
  date,
  image,
}: TPostDataProps) {
  return (
    <div className={styles.wrapper}>
      <Heading rank={2} text={title} />
      <div className={styles.inner}>
        <p className={styles.date}>{date}</p>
        <div className={styles.image_box}>
          <Image
            className={styles.image}
            src={`/blog/${image}`}
            alt="элекментик"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className={styles.text_box}>
          <p className={styles.article_title}>{articleTitle}</p>
          <p className={styles.description}>{fullDescription}</p>
        </div>
      </div>
    </div>
  );
}
