import styles from "./menuButton.module.css";

type TMenuButtonProps = {
  isOpened: boolean;
  onClickHandler: VoidFunction;
};
export default function MenuButton({
  isOpened,
  onClickHandler,
}: TMenuButtonProps) {
  return (
    <button
      className={`${styles.button} ${isOpened && styles["button--opened"]}`}
      onClick={onClickHandler}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
