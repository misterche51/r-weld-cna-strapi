import Link from "next/link";
import styles from "./button.module.css";
type TButtonProps = {
  variant?: "dark" | "light";
  text: string;
  role?: 'link'|'button'
  disabled?: boolean
  type?: 'button'|'submit'
};
export default function Button({ variant = "dark", text, role='button', disabled=false, type='button' }: TButtonProps) {
  const buttonClassNameByTheme = `${styles[`comp--${variant}`]}`
  const label = <p className={styles.label}>{text}</p>
  return (
    role ==='button' ? 
    <button className={`${styles.comp} ${buttonClassNameByTheme}`} disabled={disabled} type={type}>
      {label}
    </button> : 
    <Link href="#contact-form" className={`${styles.comp} ${buttonClassNameByTheme}`}>
      {label}
    </Link>
  );
}
