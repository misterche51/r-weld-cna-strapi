import { useState } from "react";
import Link from "next/link";
import styles from "./drop.module.css";
import { TMenuItem } from "../..";




export default function Drop({ label, menu }: TMenuItem) {
  const [isDropped, setIsDropped] = useState(false);
  const onDropHover = () => setIsDropped(true);
  const onDropUnHover = () => setIsDropped(false);
  const isDocumentationMenu = menu?.type==='download';
  const documentationDrop =
    <>
      <li className={`${styles.item} ${styles['item--downloadable']}`}>
        {/* @ts-expect-error */}
        <Link href={`${menu?.list[0]?.path ?? ''}`} rel="noopener noreferrer" target="_blank">{menu?.list[0]?.label}</Link>
      </li>
      <li className={`${styles.item}`}>
        <Link href='/documentation'>Документация</Link>
      </li>
    </> 
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
        {menu && 
          <ul className={styles.list}>
            {isDocumentationMenu ? 
              documentationDrop : 
              // @ts-expect-error
              menu.list.map((menuItem, i) =>  <li className={`${styles.item}`}><Link href={`/${menuItem.target}`}>{menuItem.label}</Link></li> )}
          </ul>
        }
      </div>
    </div>
  );
}

