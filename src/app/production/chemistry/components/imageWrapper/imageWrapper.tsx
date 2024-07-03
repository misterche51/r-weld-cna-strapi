import { ReactNode } from "react";
import styles from "./imageWrapper.module.css";

const ImageWrapper = ({
  title,
  image,
}: {
  title?: string;
  image: ReactNode;
}) => (
  <section className={styles.wrapper}>
    {title && <h3 className={styles.title}>{title}</h3>}
    {image}
  </section>
);

export default ImageWrapper;
