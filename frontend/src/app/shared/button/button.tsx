import Link from "next/link";
import styles from "./button.module.css";
type TButtonProps = {
  variant?: "dark" | "light";
  text: string;
  role?: 'link'|'button'
};
export default function Button({ variant = "dark", text, role='button' }: TButtonProps) {
  const buttonClassNameByTheme = `${styles[`comp--${variant}`]}`
  const label = <p className={styles.label}>{text}</p>
  return (
    role ==='button' ? 
    <button className={`${styles.comp} ${buttonClassNameByTheme}`}>
      {label}
    </button> : 
    <Link href="#contact-form" className={`${styles.comp} ${buttonClassNameByTheme}`}>
      {label}
    </Link>
  );
}
