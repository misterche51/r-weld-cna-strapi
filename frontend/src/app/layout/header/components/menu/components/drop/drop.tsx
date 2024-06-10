import { useState } from "react";
import Link from "next/link";
import styles from "./drop.module.css";
import { TMenuItem } from "../..";

export default function Drop({ label, menu }: TMenuItem) {
  const [isDropped, setIsDropped] = useState(false);
  const onDropHover = () => setIsDropped(true);
  const onDropUnHover = () => setIsDropped(false);
  const isDownloadableMenuItems = menu?.type==='download';
  return (
    <div
      className={styles.wrapper}
      onMouseOver={onDropHover}
      onMouseLeave={onDropUnHover}
    >
      <>{label}</>
      <div 
        className={`${styles.dropdown} ${
          isDropped ? styles["dropdown--dropped"] : ""
        }`}
      >
        <button className={styles.button_backward} onClick={onDropUnHover}>
          Назад
        </button>
        {menu && <ul className={styles.list}>
          {menu.list.map((menuItem, i) => (
            <li className={`${styles.item} ${isDownloadableMenuItems ? styles['item--downloadable'] : ''}`} key={i}>
              {isDownloadableMenuItems ? 
                // @ts-expect-error
                <Link href={`${menuItem.path}`} rel="noopener noreferrer" target="_blank">{menuItem.label}</Link>
                // @ts-expect-error
                :  <Link href={`/${menuItem.target}`}>{menuItem.label}</Link> 
                }
            </li>
          ))}
        </ul>}
      </div>
    </div>
  );
}
// `${menuItem.path}`
