"use client";
import DB from "@/api/db";
import styles from "./documentationList.module.css";
import Link from "next/link";

import { FC, useState } from "react";
import { TDownloadsDB } from "@/api/documentation/declarations";

type TDocumentationListProps = {
  list: TDownloadsDB
}


export const DocumentationList:FC<TDocumentationListProps> = ({list}) => {
  const [isListExpanded, setIsListExpanded] = useState(false);
  const onShowMoreBtnClickHandler = () => {
    setIsListExpanded(val => !val)
  }

  return (
    <div className={styles.content}>
      <ul className={`${styles.list} ${isListExpanded ? styles["list--opened"] : ''}`}>
        {list.map(({label ,id, path}) => 
          <li key={id} className={styles.item}>
            <div className={styles.image}></div>
            <p className={styles.label}>{label}</p>
            <Link className={styles.link} href={`${path}`} rel="noopener noreferrer" target="_blank">Скачать</Link>
          </li>
      )}
    </ul>
    {(!list && DB.downloads.length > 10) && <button className={styles.showMoreBtn} onClick={onShowMoreBtnClickHandler}>{isListExpanded ? 'Свернуть' : 'Показать еще'  }</button> }
  </div>)
}