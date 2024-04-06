import styles from "./button.module.css";
type TButtonProps = {
  variant?: "dark" | "light";
  text: string;
};
export default function Button({ variant = "dark", text }: TButtonProps) {
  return (
    <button className={`${styles[`comp--${variant}`]} ${styles.comp}`}>
      {text}
    </button>
  );
}
