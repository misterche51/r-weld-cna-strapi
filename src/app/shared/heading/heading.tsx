import styles from "./heading.module.css";

export type THeadingProps = {
  rank?: 1 | 2 | 3 | 4 | 5;
  text: string;
  variant?: "dark" | "light";
  withUnderline?: boolean;
};

export default function Heading({
  rank = 2,
  text,
  variant = "dark",
  withUnderline = true,
}: THeadingProps) {
  const Title = `h${rank}`;

  return (
    // @ts-expect-error
    <Title
      className={`${styles[`title--${variant}`]} ${styles.title} ${
        withUnderline && `${styles["title--underlined"]}`
      }`}
    >
      {text}
    </Title>
  );
}
