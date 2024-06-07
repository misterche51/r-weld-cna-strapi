import styles from "./button.module.css";
type TButtonProps = {
  variant?: "dark" | "light";
  text: string;
};
export default function Button({ variant = "dark", text }: TButtonProps) {
  const buttonClassNameByTheme = `${styles[`comp--${variant}`]}`

  return (
    <button className={`${styles.comp} ${buttonClassNameByTheme}`}>
      <p className={styles.label}>{text}</p>
    </button>
  );
}
