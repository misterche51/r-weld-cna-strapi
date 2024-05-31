import styles from "./description.module.css";

const Description = ({ description }: { description: string }) => (
  <p className={styles.text}>{description}</p>
);

export default Description;
